'use client';
import { useMemo, useState } from 'react';
import { Course } from '@prisma/client';
import { useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

import { dom } from '@/helpers/dom';
import { Button } from '@/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from '@/ui/drawer';
import { Typography } from '@/ui/typography';

export type BuildingName = 'unikit' | 'korabl';

interface BuildingModelItem {
  name: BuildingName;
  gridPosition: [number, number];
  size: [number, number];
  rotation?: number;
}

interface BuildingModelProps {
  onClick: (open: boolean) => void;
  item: BuildingModelItem;
}

const BuildingModel = ({ onClick, item }: BuildingModelProps) => {
  const { scene } = useGLTF(`/models/${item.name}.glb`);
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  return (
    <group
      onClick={() => onClick(true)}
      position={[
        item.size[0] / 2 + item.gridPosition[0],
        0,
        item.size[1] / 2 + item.gridPosition[1]
      ]}
    >
      <primitive rotation-y={((item.rotation || 0) * Math.PI) / 2} object={clone} castShadow />
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.002, 0]}>
        <planeGeometry args={[item.size[0], item.size[1]]} />
        <meshBasicMaterial />
      </mesh>
    </group>
  );
};

export interface BuildingProps extends Omit<BuildingModelProps, 'onClick'> {
  course: CourseWithSubjects;
}

export const Building = ({ item, course }: BuildingProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BuildingModel onClick={setOpen} item={item} />
      <dom.In>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent>
            <DrawerHeader className='text-left'>
              <DrawerTitle>{course?.year} курс</DrawerTitle>
              <DrawerDescription>{course?.descrition}</DrawerDescription>
            </DrawerHeader>
            <div className='px-4'>
              <Typography variant='h3' tag='h3'>
                Изучаемые дисциплины:
              </Typography>
              <ul className='flex flex-wrap gap-2.5'>
                {course.subjects?.map((subject) => (
                  <li key={subject.name} className='rounded-md px-2.5 py-1'>
                    {subject.name}
                  </li>
                ))}
              </ul>
            </div>
            <DrawerFooter className='pt-2'>
              <DrawerClose asChild>
                <Button variant='outline'>Закрыть</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </dom.In>
    </>
  );
};

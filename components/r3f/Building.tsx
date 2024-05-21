'use client';
import { useMemo, useRef, useState } from 'react';
import { useCursor, useGLTF } from '@react-three/drei';
import { PrimitiveProps, useFrame } from '@react-three/fiber';
import { SkeletonUtils } from 'three-stdlib';

import { dom } from '@/helpers/dom';
import { useMediaQuery } from '@/hooks/useMediaQuery';
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
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/ui/sheet';
import { Typography, typographyVariants } from '@/ui/typography';
import { cn } from '@/utils/cn';

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
  const modelRef = useRef<PrimitiveProps>(null!);
  const { scene } = useGLTF(`/models/${item.name}.glb`);
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  useFrame(({ clock }) => {
    modelRef.current.position.y = Math.abs(Math.sin(clock.getElapsedTime() * 1.5) * 0.2);
  });
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  return (
    <group
      onClick={() => onClick(true)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      position={[
        item.size[0] / 2 + item.gridPosition[0],
        0,
        item.size[1] / 2 + item.gridPosition[1]
      ]}
      rotation-y={((item.rotation || 0) * Math.PI) / 2}
    >
      <primitive ref={modelRef} object={clone} castShadow />
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.002, 0]}>
        <planeGeometry args={[item.size[0], item.size[1]]} />
        <meshBasicMaterial color={hovered ? '#BAF6B5' : 'white'} />
      </mesh>
    </group>
  );
};

export interface BuildingProps extends Omit<BuildingModelProps, 'onClick'> {
  course: CourseWithSubjects;
}

export const Building = ({ item, course }: BuildingProps) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <BuildingModel onClick={setOpen} item={item} />
      {course && (
        <dom.In>
          {isDesktop && (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetContent className='flex flex-col gap-2.5'>
                <SheetHeader>
                  <SheetTitle>{course?.year} курс</SheetTitle>
                  <SheetDescription>{course?.descrition}</SheetDescription>
                </SheetHeader>
                <Typography variant='h3' tag='h3'>
                  Изучаемые дисциплины:
                </Typography>
                {course.subjects && (
                  <ul className='flex flex-wrap gap-2'>
                    {course.subjects?.map((subject, index) => (
                      <li
                        key={`${subject.subjectName}-${index}`}
                        className={cn(
                          'rounded-md border px-2 py-1 text-xs',
                          typographyVariants({ color: 'blue-to-green' })
                        )}
                      >
                        {subject.subjectName}
                      </li>
                    ))}
                  </ul>
                )}
              </SheetContent>
            </Sheet>
          )}
          {!isDesktop && (
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
                  {course.subjects && (
                    <ul className='flex flex-wrap gap-2'>
                      {course.subjects?.map((subject, index) => (
                        <li
                          key={`${subject.subjectName}-${index}`}
                          className={cn(
                            'rounded-md border px-2 py-1 text-xs',
                            typographyVariants({ color: 'blue-to-green' })
                          )}
                        >
                          {subject.subjectName}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <DrawerFooter className='pt-2'>
                  <DrawerClose asChild>
                    <Button variant='outline'>Закрыть</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          )}
        </dom.In>
      )}
    </>
  );
};

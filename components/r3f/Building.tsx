'use client';
import { useMemo, useState } from 'react';
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

type Item = 'test' | 'test2';

interface BuildingModelProps {
  onClick: (open: boolean) => void;
  item: Item;
  grid: [number, number];
  scale?: number;
}

const BuildingModel = ({ onClick, item, grid, scale }: BuildingModelProps) => {
  const { scene, nodes, materials } = useGLTF(`/models/${item}.glb`);
  // Skinned meshes cannot be re-used in threejs without cloning them
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  return (
    <group>
      <primitive
        scale={scale}
        position={[grid[0], 0, grid[1]]}
        onClick={() => onClick(true)}
        object={clone}
        castShadow
      />
    </group>
  );
};

interface BuildingProps extends Omit<BuildingModelProps, 'onClick'> {}

export const Building = ({ item, grid, scale }: BuildingProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BuildingModel onClick={setOpen} item={item} grid={grid} scale={scale} />
      <dom.In>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent>
            <DrawerHeader className='text-left'>
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>Make changes to your profile here. Click save</DrawerDescription>
            </DrawerHeader>
            Коробка
            <DrawerFooter className='pt-2'>
              <DrawerClose asChild>
                <Button variant='outline'>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </dom.In>
    </>
  );
};

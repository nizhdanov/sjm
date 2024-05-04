import { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

type Forest = 'forest1' | 'forest2' | 'forest3';
type Road = 'road';

interface BasicModel {
  grid: [number, number];
  name: Forest | Road;
  scale?: number;
}

export const BasicModel = ({ grid, scale, name }: BasicModel) => {
  const { scene } = useGLTF(`/models/${name}.glb`);
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  return (
    <primitive
      scale={scale}
      position={[grid[0], 0, grid[1]]}
      position-y={0}
      object={clone}
      castShadow
      // rotation-y={Math.PI}
    />
  );
};

import { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

interface RoadModelProps {
  grid: [number, number];
  scale?: number;
}

export const RoadModel = ({ grid, scale }: RoadModelProps) => {
  const { scene, nodes, materials } = useGLTF(`/models/road.glb`);
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  return (
    <group>
      <primitive scale={scale} position={[grid[0], 0, grid[1]]} object={clone} castShadow />
    </group>
  );
};

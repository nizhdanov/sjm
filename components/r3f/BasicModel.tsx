import { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

export type BasicModelName = 'round-road' | 'dash-road' | 'solid-road' | 'birch-tree';

export interface BasicModelItem {
  name: BasicModelName;
  gridPosition: [number, number];
  size: [number, number];
  rotation?: number;
}

interface BasicModelProps {
  item: BasicModelItem;
}

export const BasicModel = ({ item }: BasicModelProps) => {
  const { scene } = useGLTF(`/models/${item.name}.glb`);
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  return (
    <primitive
      object={clone}
      position={[
        item.size[0] / 2 + item.gridPosition[0],
        0,
        item.size[1] / 2 + item.gridPosition[1]
      ]}
      rotation-y={((item.rotation || 0) * Math.PI) / 2}
    />
  );
};

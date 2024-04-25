'use client';

import { useRef, useState } from 'react';
import type { ThreeEvent } from '@react-three/fiber';
import { atom, useAtom, useAtomValue, useStore } from 'jotai';
import type { Mesh } from 'three';

import { getNormalizedCursorCoords } from '@/lib/utils';
import { selectedToolAtom } from '@/store/atoms';

import { Box, GhostBox } from './Box';

export const roadsAtom = atom<[number, number][]>([]);

export const RoadTool = () => {
  const ghostBoxRef = useRef<Mesh>(null!);
  const [roads, setRoads] = useAtom(roadsAtom);
  const [isVisible, setIsVisible] = useState(false);
  const selectedTool = useAtomValue(selectedToolAtom);

  const store = useStore();

  console.log(store);

  const onPointerMove = (event: ThreeEvent<PointerEvent>) => {
    const vector = getNormalizedCursorCoords(event);
    ghostBoxRef.current.position.set(vector[0], 1, vector[1]);
  };

  const onPointerDown = (event: ThreeEvent<PointerEvent>) => {
    const vector = getNormalizedCursorCoords(event);
    if (roads.includes(vector)) {
      setRoads((roads) => roads.filter((road) => road !== vector));
    } else {
      setRoads((roads) => [...roads, vector]);
    }
  };

  return (
    <>
      <mesh
        receiveShadow
        rotation-x={-Math.PI / 2}
        position={[0, -0.002, 0]}
        onPointerMove={(e) => {
          if (selectedTool === 'ROAD') {
            onPointerMove(e);
          }
        }}
        onPointerEnter={() => setIsVisible(true)}
        onPointerLeave={() => setIsVisible(false)}
        onPointerDown={(e) => {
          if (selectedTool === 'ROAD') {
            onPointerDown(e);
          }
        }}
      >
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial color='#92E582' />
      </mesh>
      {selectedTool === 'ROAD' && <GhostBox key='ghostBox' ref={ghostBoxRef} visible={isVisible} />}

      {roads.map((position, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Box key={index} position-x={position[0]} position-z={position[1]} />
      ))}
    </>
  );
};

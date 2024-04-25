'use client';

import { forwardRef } from 'react';
import type { MeshProps } from '@react-three/fiber';

const Box = forwardRef<any, MeshProps>((props, ref) => (
  <mesh ref={ref} {...props} position-y={1}>
    <boxGeometry />
    <meshStandardMaterial color='blue' />
  </mesh>
));

Box.displayName = 'Box';

const GhostBox = forwardRef<any, MeshProps>((props, ref) => (
  <mesh ref={ref} {...props} position-y={1}>
    <boxGeometry />
    <meshStandardMaterial color='red' opacity={0.5} transparent />
  </mesh>
));

GhostBox.displayName = 'GhostBox';

export { Box, GhostBox };

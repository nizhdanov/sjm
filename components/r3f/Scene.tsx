'use client';

import { Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { AgXToneMapping } from 'three';

import { r3f } from '@/helpers/r3f';

export const Scene = ({ ...props }) => {
  return (
    <Canvas onCreated={(state) => (state.gl.toneMapping = AgXToneMapping)} {...props}>
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
};

export const TestScene = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <Canvas onCreated={(state) => (state.gl.toneMapping = AgXToneMapping)} {...props}>
      {children}
      <Preload all />
    </Canvas>
  );
};

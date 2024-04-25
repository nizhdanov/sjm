'use client';

import { Environment, OrthographicCamera } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

const IsometricCamera = () => {
  const { camera } = useThree();
  camera.lookAt(new Vector3(0, 0, 0));
  return <OrthographicCamera zoom={60} makeDefault position={[16, 16, 16]} />;
};

export const Scene = () => {
  return (
    <Canvas id='scene' shadows>
      {/* <axesHelper args={[7]} /> */}
      <gridHelper args={[16, 16]} />
      <color attach='background' args={['#f8fafc']} />
      <IsometricCamera />
      <Environment preset='city' />
      {/* <directionalLight position={[-15, 15, 15]} />
      <ambientLight /> */}
    </Canvas>
  );
};

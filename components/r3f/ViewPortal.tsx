'use client';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { View } from '@react-three/drei';
import { Environment, OrthographicCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

import { r3f } from '@/lib/helpers/r3f';

const size = 12;

const IsometricCamera = () => {
  const { camera } = useThree();
  camera.lookAt(new Vector3(0, 0, 0));
  return <OrthographicCamera zoom={40} makeDefault position={[size, size, size]} />;
};

export const Base = () => {
  return (
    <>
      <gridHelper args={[size, size]} />
      <IsometricCamera />
      <Environment preset='city' />
      {/* <directionalLight position={[-size, size, size]} />
      <ambientLight /> */}

      <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -0.002, 0]}>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial color='#92E582' />
      </mesh>
    </>
  );
};

const ViewPortal = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ children, ...props }, ref) => {
    const localRef = useRef<HTMLDivElement>(null!);
    useImperativeHandle(ref, () => localRef.current);

    return (
      <>
        <div ref={localRef} {...props} />
        <r3f.In>
          <View track={localRef}>{children}</View>
        </r3f.In>
      </>
    );
  }
);
ViewPortal.displayName = 'ViewPortal';

export { ViewPortal };

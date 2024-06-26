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
  return <OrthographicCamera zoom={45} makeDefault position={[size, size, size]} />;
};

export const Base = () => {
  return (
    <>
      <color attach='background' args={['#fff']} />
      <gridHelper args={[size, size, '#A8A9A9', '#A8A9A9']} />
      <IsometricCamera />
      <Environment preset='city' />
      {/* <directionalLight position={[-size, size, size]} />
      <ambientLight /> */}
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
          <View track={localRef}>
            {children}
            <Base />
          </View>
        </r3f.In>
      </>
    );
  }
);
ViewPortal.displayName = 'ViewPortal';

export { ViewPortal };

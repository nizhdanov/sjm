'use client';

import { useRef } from 'react';

import { Scene } from './Scene';

const R3fProvider = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null!);

  return (
    <div ref={ref} className='relative size-full touch-auto overflow-auto'>
      {children}
      <Scene
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none'
        }}
        eventSource={ref}
        eventPrefix='client'
      />
    </div>
  );
};

export { R3fProvider };

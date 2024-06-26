'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./Scene').then((mod) => mod.Scene), { ssr: false });

const R3fProvider = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null!);

  return (
    <div ref={ref} className='relative size-full touch-auto overflow-auto scrollbar-thin'>
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

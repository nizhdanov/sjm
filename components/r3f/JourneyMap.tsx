'use client';
import dynamic from 'next/dynamic';

import { dom } from '@/helpers/dom';
import { cn } from '@/utils/cn';

import { Base, ViewPortal } from './ViewPortal';

const Building = dynamic(() => import('./Building').then((mod) => mod.Building), { ssr: false });

const roadCoords = [
  [0, 0],
  [0, 4],
  [4, 4],
  [4, 0],
  [0, 0]
];

export const JourneyMap = ({ className, ...props }: React.ComponentProps<typeof ViewPortal>) => {
  return (
    <>
      <ViewPortal className={cn(className)} {...props}>
        <Building item='test' grid={[-1, -1]} scale={0.05} />
        {/* <Building item='test2' grid={[6, 6]} />
        <Building item='test' grid={[-6, -2]} />
        <Building item='test2' grid={[-4, -4]} /> */}
        <Base />
      </ViewPortal>
      <dom.Out />
    </>
  );
};

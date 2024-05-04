'use client';
import dynamic from 'next/dynamic';

import { DetailedSpecialty } from '@/api/specialties';
import { dom } from '@/helpers/dom';
import { cn } from '@/utils/cn';

import { Base, ViewPortal } from './ViewPortal';

const Building = dynamic(() => import('./Building').then((mod) => mod.Building), { ssr: false });
const BasicModel = dynamic(() => import('./BasicModel').then((mod) => mod.BasicModel), {
  ssr: false
});

interface JourneyMapProps {
  specialty: DetailedSpecialty;
}

export const JourneyMap = ({
  className,
  specialty,
  ...props
}: React.ComponentProps<typeof ViewPortal> & JourneyMapProps) => {
  return (
    <>
      <ViewPortal className={cn(className)} {...props}>
        <Building grid={[0, 0]} scale={0.1} item='test' course={specialty?.courses[0]!} />
        <BasicModel grid={[2, 2]} name='road' scale={0.05} />
        <Base />
        <color attach='background' args={['white']} />
      </ViewPortal>
      <dom.Out />
    </>
  );
};

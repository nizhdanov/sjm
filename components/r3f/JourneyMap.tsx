'use client';
import { Course } from '@prisma/client';
import dynamic from 'next/dynamic';

import { dom } from '@/helpers/dom';
import { cn } from '@/utils/cn';

import { BasicModelItem } from './BasicModel';
import { BuildingProps } from './Building';
import { Base, ViewPortal } from './ViewPortal';

const Building = dynamic(() => import('./Building').then((mod) => mod.Building), { ssr: false });
const BasicModel = dynamic(() => import('./BasicModel').then((mod) => mod.BasicModel), {
  ssr: false
});

interface JourneyMapProps {
  courses: Course[];
}

const basicModels: BasicModelItem[] = [
  {
    size: [1, 1],
    name: 'dash-road',
    gridPosition: [-1, -1]
  },
  {
    size: [1, 1],
    name: 'birch-tree',
    gridPosition: [2, 2]
  },
  {
    size: [1, 1],
    name: 'solid-road',
    gridPosition: [-1, 0]
  },
  {
    size: [1, 1],
    name: 'round-road',
    gridPosition: [-1, 1]
  },
  {
    size: [1, 1],
    name: 'round-road',
    gridPosition: [-2, 1],
    rotation: 2
  }
];

export const JourneyMap = ({
  className,
  courses,
  ...props
}: React.ComponentProps<typeof ViewPortal> & JourneyMapProps) => {
  const buildings: BuildingProps[] = [
    {
      course: courses[1],
      item: {
        size: [2, 1],
        name: 'unikit',
        gridPosition: [-1, 3]
      }
    }
  ];

  return (
    <>
      <ViewPortal className={cn(className)} {...props}>
        {/* {basicModels.map((basicModel, index) => (
          <BasicModel item={basicModel} key={`${basicModel.name}-${index}`} />
        ))} */}
        {buildings.map((building, index) => (
          <Building
            item={building.item}
            course={building.course}
            key={`${building.item.name}-${index}`}
          />
        ))}
        <Base />
      </ViewPortal>
      <dom.Out />
    </>
  );
};

'use client';
import dynamic from 'next/dynamic';

import { dom } from '@/helpers/dom';
import { LoaderCircleIcon } from '@/icons/LoaderCircleIcon';
import { cn } from '@/utils/cn';

import { BasicModelItem } from './BasicModel';
import { BuildingProps } from './Building';

const ViewPortal = dynamic(() => import('./ViewPortal').then((mod) => mod.ViewPortal), {
  ssr: false,
  loading: () => (
    <div className='flex h-[400px] w-full items-center justify-center bg-white '>
      <LoaderCircleIcon className='text-foreground' />
    </div>
  )
});
const Building = dynamic(() => import('./Building').then((mod) => mod.Building), { ssr: false });
const BasicModel = dynamic(() => import('./BasicModel').then((mod) => mod.BasicModel), {
  ssr: false
});

interface JourneyMapProps {
  courses: CourseWithSubjects[];
}

const basicModels: BasicModelItem[] = [
  {
    name: 'dash-road',
    size: [1, 1],
    gridPosition: [-2, -2],
    rotation: 1
  },
  {
    name: 'solid-road',
    size: [1, 1],
    gridPosition: [-3, -2],
    rotation: 1
  },
  {
    name: 'round-road',
    size: [1, 1],
    gridPosition: [-4, -2],
    rotation: 3
  },
  {
    name: 'solid-road',
    size: [1, 1],
    gridPosition: [-4, -3]
  },
  {
    name: 'dash-road',
    size: [1, 1],
    gridPosition: [-4, -4]
  },
  {
    name: 'round-road',
    size: [1, 1],
    gridPosition: [-4, -5],
    rotation: 1
  },
  {
    name: 'solid-road',
    size: [1, 1],
    gridPosition: [-5, -5],
    rotation: 1
  },
  {
    name: 'dash-road',
    size: [1, 1],
    gridPosition: [-6, -5],
    rotation: 1
  },
  {
    name: 'round-road',
    size: [1, 1],
    gridPosition: [-1, -2]
  },
  {
    name: 'round-road',
    size: [1, 1],
    gridPosition: [-1, -3],
    rotation: 2
  },
  {
    name: 'solid-road',
    size: [1, 1],
    gridPosition: [0, -3],
    rotation: 1
  },
  {
    name: 'solid-road',
    size: [1, 1],
    gridPosition: [1, -3],
    rotation: 1
  },
  {
    name: 'round-road',
    size: [1, 1],
    gridPosition: [2, -3],
    rotation: 1
  },
  {
    name: 'round-road',
    size: [1, 1],
    gridPosition: [2, -2],
    rotation: 3
  },
  {
    name: 'round-road',
    size: [1, 1],
    gridPosition: [3, -2],
    rotation: 1
  },
  {
    name: 'dash-road',
    size: [1, 1],
    gridPosition: [3, -1]
  },
  {
    name: 'round-road',
    size: [1, 1],
    gridPosition: [3, 0]
  },
  {
    name: 'dash-road',
    size: [1, 1],
    gridPosition: [2, 0],
    rotation: 1
  },
  {
    name: 'dash-road',
    size: [1, 1],
    gridPosition: [1, 0],
    rotation: 1
  },
  {
    name: 'dash-road',
    size: [1, 1],
    gridPosition: [0, 0],
    rotation: 1
  },
  {
    name: 'round-road',
    size: [1, 1],
    gridPosition: [-1, 0],
    rotation: 2
  },
  {
    name: 'solid-road',
    size: [1, 1],
    gridPosition: [-1, 1]
  },
  {
    name: 'round-road',
    size: [1, 1],
    gridPosition: [-1, 2],
    rotation: 3
  },
  {
    name: 'birch-tree',
    size: [1, 1],
    gridPosition: [2, 2]
  }
];

export const JourneyMap = ({
  className,
  courses,
  ...props
}: React.ComponentProps<typeof ViewPortal> & JourneyMapProps) => {
  const buildings: BuildingProps[] = [
    {
      course: courses[0],
      item: {
        size: [2, 4],
        name: 'korabl',
        gridPosition: [-3, -6]
      }
    },
    {
      course: courses[1],
      item: {
        size: [2, 1],
        name: 'unikit',
        gridPosition: [1, -1]
      }
    }
  ];

  return (
    <>
      <ViewPortal className={cn(className)} {...props}>
        {basicModels.map((basicModel, index) => (
          <BasicModel item={basicModel} key={`${basicModel.name}-${index}`} />
        ))}
        {buildings.map((building, index) => (
          <Building
            key={`${building.item.name}-${index}`}
            item={building.item}
            course={building.course}
          />
        ))}
      </ViewPortal>
      <dom.Out />
    </>
  );
};

'use client';
import { Text } from '@react-three/drei';
import dynamic from 'next/dynamic';

import { dom } from '@/helpers/dom';
import { LoaderCircleIcon } from '@/icons/LoaderCircleIcon';
import { cn } from '@/utils/cn';

import { BasicModelItem } from './BasicModel';
import { BuildingProps } from './Building';

const ViewPortal = dynamic(() => import('./ViewPortal').then((mod) => mod.ViewPortal), {
  ssr: false,
  loading: () => (
    <div className='flex h-[450px] w-full items-center justify-center bg-white '>
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

const modelPositions: Omit<BasicModelItem, 'size'>[] = [
  {
    name: 'birch-tree',
    gridPosition: [-6, 3],
    rotation: 2
  },
  {
    name: 'birch-tree',
    gridPosition: [3, -4]
  },
  {
    name: 'birch-tree',
    gridPosition: [-2, -6]
  },
  {
    name: 'birch-tree',
    gridPosition: [-3, 2],
    rotation: 1
  },
  {
    name: 'birch-tree',
    gridPosition: [4, 4],
    rotation: 2
  },
  {
    name: 'birch-tree',
    gridPosition: [1, -1],
    rotation: 3
  },
  {
    name: 'birch-tree',
    gridPosition: [4, 4],
    rotation: 1
  },
  {
    name: 'solid-road',
    gridPosition: [-6, 4],
    rotation: 1
  },
  {
    name: 'solid-road',
    gridPosition: [-5, 4],
    rotation: 1
  },
  {
    name: 'round-road',
    gridPosition: [-4, 4]
  },
  {
    name: 'solid-road',
    gridPosition: [-4, 3]
  },
  {
    name: 'dash-road',
    gridPosition: [-4, 2]
  },
  {
    name: 'dash-road',
    gridPosition: [-4, 1]
  },
  {
    name: 'dash-road',
    gridPosition: [-4, 0]
  },
  {
    name: 'dash-road',
    gridPosition: [-4, -1]
  },
  {
    name: 'solid-road',
    gridPosition: [-4, -2]
  },
  {
    name: 'round-road',
    gridPosition: [-4, -3],
    rotation: 2
  },
  {
    name: 'solid-road',
    gridPosition: [-3, -3],
    rotation: 1
  },
  {
    name: 'solid-road',
    gridPosition: [-2, -3],
    rotation: 1
  },
  {
    name: 'solid-road',
    gridPosition: [-1, -3],
    rotation: 1
  },
  {
    name: 'round-road',
    gridPosition: [0, -3],
    rotation: 1
  },
  {
    name: 'solid-road',
    gridPosition: [0, -2]
  },
  {
    name: 'solid-road',
    gridPosition: [0, -1]
  },
  {
    name: 'solid-road',
    gridPosition: [0, 0]
  },
  {
    name: 'solid-road',
    gridPosition: [0, 1]
  },
  {
    name: 'round-road',
    gridPosition: [0, 2],
    rotation: 3
  },
  {
    name: 'solid-road',
    gridPosition: [1, 2],
    rotation: 1
  },
  {
    name: 'solid-road',
    gridPosition: [2, 2],
    rotation: 1
  },
  {
    name: 'solid-road',
    gridPosition: [3, 2],
    rotation: 1
  },
  {
    name: 'round-road',
    gridPosition: [4, 2]
  },
  {
    name: 'solid-road',
    gridPosition: [4, 1]
  },
  {
    name: 'dash-road',
    gridPosition: [4, 0]
  },
  {
    name: 'dash-road',
    gridPosition: [4, -1]
  },
  {
    name: 'dash-road',
    gridPosition: [4, -2]
  },
  {
    name: 'dash-road',
    gridPosition: [4, -3]
  },
  {
    name: 'solid-road',
    gridPosition: [4, -4]
  },
  {
    name: 'round-road',
    gridPosition: [4, -5],
    rotation: 2
  },
  {
    name: 'solid-road',
    gridPosition: [5, -5],
    rotation: 1
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
        gridPosition: [-6, -4]
      }
    },
    {
      course: courses[1],
      item: {
        size: [2, 1],
        name: 'unikit',
        gridPosition: [-2, -4]
      }
    },
    {
      course: courses[2],
      item: {
        size: [2, 1],
        name: 'unikit',
        gridPosition: [-2, 0]
      }
    },
    {
      course: courses[3],
      item: {
        size: [2, 1],
        name: 'unikit',
        gridPosition: [2, 1]
      }
    }
  ];

  return (
    <>
      <ViewPortal className={cn(className)} {...props}>
        {modelPositions.map((basicModel, index) => (
          <BasicModel item={{ ...basicModel, size: [1, 1] }} key={`${basicModel.name}-${index}`} />
        ))}
        {buildings.map((building, index) => (
          <Building
            key={`${building.item.name}-${index}`}
            item={building.item}
            course={building.course}
          />
        ))}
        {/* <Text position={[0, 0, 0]}>hello world!</Text> */}
      </ViewPortal>
      <dom.Out />
    </>
  );
};

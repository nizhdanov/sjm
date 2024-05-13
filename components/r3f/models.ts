import { BasicModelName } from './BasicModel';
import { BuildingName } from './Building';

interface Models {
  [key: string]: {
    [key: string]: {
      name: BasicModelName | BuildingName;
      size: [number, number];
    };
  };
}

export const models: Models = {
  trees: {
    birch: {
      name: 'birch-tree',
      size: [1, 1]
    }
  },
  roads: {
    dash: {
      name: 'dash-road',
      size: [1, 1]
    },
    solid: {
      name: 'solid-road',
      size: [1, 1]
    },
    round: {
      name: 'round-road',
      size: [1, 1]
    }
  },
  buildings: {
    unikit: {
      name: 'unikit',
      size: [2, 1]
    },
    korabl: {
      name: 'korabl',
      size: [2, 4]
    }
  }
};

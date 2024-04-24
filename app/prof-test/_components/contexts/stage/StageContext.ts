import { createContext } from 'react';

export interface StageContextProps {
  stage: number;
  setStage: (stage: number) => void;
}

export const StageContext = createContext<StageContextProps>({
  stage: 0,
  setStage: () => {}
});

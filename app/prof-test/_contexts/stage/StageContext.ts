import { createContext } from 'react';

export type Stage = number | 'start';

export interface StageContextProps {
  stage: Stage;
  setStage: (stage: number) => void;
}

export const StageContext = createContext<StageContextProps>({
  stage: 'start',
  setStage: () => {}
});

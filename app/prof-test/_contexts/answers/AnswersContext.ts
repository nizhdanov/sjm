import { createContext } from 'react';

export type Answer = {
  order: number;
  optionId: string;
};

export interface AnswersContextProps {
  answers: Answer[];
  setAnswers: ((answers: Answer[]) => void) | (() => Answer[]);
}

export const AnswersContext = createContext<AnswersContextProps>({
  answers: [],
  setAnswers: () => {}
});

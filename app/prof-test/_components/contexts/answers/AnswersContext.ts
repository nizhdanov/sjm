import { createContext } from 'react';

export interface AnswersContextProps {
  answers: [];
  setAnswers: ((answers: Answer[]) => void) | (() => Answer[]);
}

export const AnswersContext = createContext<AnswersContextProps>({
  answers: [],
  setAnswers: () => {}
});

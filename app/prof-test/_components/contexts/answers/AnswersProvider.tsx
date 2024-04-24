'use client';
import { useMemo, useState } from 'react';

import { AnswersContext } from './AnswersContext';

export interface AnswersProviderProps {
  children: React.ReactNode;
}

export const AnswersProvider: React.FC<AnswersProviderProps> = ({ children }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);

  const value = useMemo(() => ({ answers, setAnswers }), [answers]);

  return <AnswersContext.Provider value={value}>{children}</AnswersContext.Provider>;
};

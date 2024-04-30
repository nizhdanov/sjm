'use client';
import { useMemo, useState } from 'react';

import { StageContext } from './StageContext';

export interface StageProviderProps {
  children: React.ReactNode;
}

export const StageProvider: React.FC<StageProviderProps> = ({ children }) => {
  const [stage, setStage] = useState<number>(0);

  const value = useMemo(() => ({ stage, setStage }), [stage]);

  return <StageContext.Provider value={value}>{children}</StageContext.Provider>;
};

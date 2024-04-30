'use client';

import { Provider as JotaiProvider } from 'jotai';

import { R3fProvider } from '@/components/r3f/R3fProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <JotaiProvider>
      <R3fProvider>{children}</R3fProvider>
    </JotaiProvider>
  );
};

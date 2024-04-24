import { AnswersProvider } from './contexts/answers/AnswersProvider';
import { StageProvider } from './contexts/stage/StageProvider';

interface ProfTestProvidersProps {
  children: React.ReactNode;
}

export const ProfTestProviders = ({ children }: ProfTestProvidersProps) => {
  return (
    <StageProvider>
      <AnswersProvider>{children}</AnswersProvider>
    </StageProvider>
  );
};

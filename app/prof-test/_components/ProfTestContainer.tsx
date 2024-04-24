'use client';
import { useStage } from './contexts/stage/useStage';
import { questions } from './constants';
import { ProfTestButtonsContainer } from './ProfTestButtonsContainer';
import { Quest } from './Quest';

export const ProfTestContainer = () => {
  const { stage } = useStage();

  const component = questions.map(() => <Quest key={stage} />);
  return (
    <main className='flex flex-col items-center justify-between'>
      {component[stage]}
      <ProfTestButtonsContainer />
    </main>
  );
};

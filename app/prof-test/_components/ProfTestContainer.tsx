'use client';

import { useStage } from './contexts/stage/useStage';
import { ProfTestButtons } from './ProfTestButtons';
import { Quest } from './Quest';

export const ProfTestContainer = ({ questions }: { questions: QuestionWithOptions[] }) => {
  const { stage } = useStage();
  const component = questions.map(() => (
    <Quest key={stage} question={questions[stage]} questionsLenght={questions.length} />
  ));
  return (
    <main className='flex flex-col items-center justify-between'>
      {component[stage]}
      <ProfTestButtons questionsLenght={questions.length} />
    </main>
  );
};

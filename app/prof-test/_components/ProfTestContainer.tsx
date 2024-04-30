'use client';

import { useStage } from '../_contexts/stage/useStage';

import { ProfTestButtons } from './ProfTestButtons';
import { Quest } from './Quest';

export const ProfTestContainer = ({ questions }: { questions: QuestionWithOptions[] }) => {
  const { stage } = useStage();

  return (
    <main className='flex flex-col items-center justify-between'>
      <Quest key={stage} question={questions[stage]} questionsLenght={questions.length} />
      <ProfTestButtons questionsLenght={questions.length} />
    </main>
  );
};

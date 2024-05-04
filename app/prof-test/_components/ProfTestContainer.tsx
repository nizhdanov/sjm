'use client';

import { Button } from '@/ui/button';
import { Card } from '@/ui/card';
import { Typography } from '@/ui/typography';

import { useStage } from '../_contexts/stage/useStage';

import { ProfTestButtons } from './ProfTestButtons';
import { QuestCard } from './QuestCard';

export const ProfTestContainer = ({ questions }: { questions: QuestionWithOptions[] }) => {
  const { stage, setStage } = useStage();

  return (
    <main className='flex h-s-minus-navbar flex-col items-center justify-center gap-5 px-4 '>
      {stage === 'start' && (
        <Card className='flex flex-col gap-5 px-4 py-10 text-center'>
          <Typography tag='h2' variant='default'>
            Готовы открыть двери карьерных возможностей?
            <br />
            Пройдите тестирование, состоящее из шести вопросов, чтобы подобрать самое подходящее для
            вас направление.
          </Typography>
          <Button onClick={() => setStage(0)}>Начать тестирование</Button>
        </Card>
      )}
      {stage !== 'start' && (
        <>
          <span className='text-base font-semibold'>
            {questions[stage].order} из {questions.length}
          </span>
          <QuestCard key={stage} question={questions[stage]} />
          <ProfTestButtons questionsLenght={questions.length} />
        </>
      )}
    </main>
  );
};

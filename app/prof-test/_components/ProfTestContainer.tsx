'use client';

import { Button } from '@/ui/button';
import { Card } from '@/ui/card';
import { Typography } from '@/ui/typography';

import { useStage } from '../_contexts/stage/useStage';

import { QuestCard } from './QuestCard';

export const ProfTestContainer = ({ questions }: { questions: QuestionWithOptions[] }) => {
  const { stage, setStage } = useStage();

  return (
    <main className='container flex h-s-minus-navbar flex-col items-center justify-center '>
      <div className='flex w-full max-w-lg flex-col items-center justify-center gap-5 '>
        {stage === 0 && (
          <Card className='flex flex-col gap-5 px-4 py-10 text-center'>
            <Typography tag='h2' variant='base'>
              Готовы открыть двери карьерных возможностей?
              <br />
              Пройдите тестирование, состоящее из пяти вопросов, чтобы подобрать самое подходящее
              для вас направление.
            </Typography>
            <Button onClick={() => setStage(1)}>Начать тестирование</Button>
          </Card>
        )}
        {stage !== 0 && (
          <>
            <span className='text-base font-semibold'>
              {stage} из {questions.length}
            </span>
            <QuestCard key={stage} question={questions[stage - 1]} />
          </>
        )}
      </div>
    </main>
  );
};

'use client';
import { useRouter } from 'next/navigation';

import { postCalculateResult } from '@/api/questions';
import { Button } from '@/ui/button';

import { useAnswers } from './contexts/answers/useAnswers';
import { useStage } from './contexts/stage/useStage';

interface ProfTestButtonsProps {
  questionsLenght: number;
}

export const ProfTestButtons = ({ questionsLenght }: ProfTestButtonsProps) => {
  const router = useRouter();
  const { stage, setStage } = useStage();
  const { answers } = useAnswers();

  function onClickBackBtn() {
    setStage(stage - 1);
  }

  async function onClickNextBtn() {
    if (stage === questionsLenght - 1) {
      await postCalculateResult(answers.map((answer) => answer.optionId));

      // router.push(`/prof-test/result/#`);
    } else {
      setStage(stage + 1);
    }
  }

  const value = answers.find((answer) => answer.order === stage + 1)?.optionId;
  return (
    <div className='flex w-full flex-col items-center gap-5 px-4'>
      <div className='grid w-full grid-cols-2 gap-5'>
        <Button
          className='w-full'
          variant='outline'
          disabled={stage === 0}
          onClick={onClickBackBtn}
        >
          Назад
        </Button>
        <Button className='w-full' disabled={Boolean(!value)} onClick={onClickNextBtn}>
          Далее
        </Button>
      </div>
    </div>
  );
};

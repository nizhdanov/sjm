'use client';
import { useRouter } from 'next/navigation';

import { Button } from '@/ui/button';

import { useAnswers } from '../_contexts/answers/useAnswers';
import { useStage } from '../_contexts/stage/useStage';

interface ProfTestButtonsProps {
  questionsLenght: number;
}

export const ProfTestButtons = ({ questionsLenght }: ProfTestButtonsProps) => {
  const { stage, setStage } = useStage<number>();
  const { answers } = useAnswers();
  const { push } = useRouter();

  const value = answers.find((answer) => answer.order === stage + 1)?.optionId;

  function onClickBackBtn() {
    setStage(stage - 1);
  }

  async function onClickNextBtn() {
    if (stage === questionsLenght - 1) {
      const res = await fetch('/api/result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(answers.map((answer) => answer.optionId))
      });

      const code: string = await res.json();

      push(`/${code.replaceAll('.', '-')}`);
    } else {
      setStage(stage + 1);
    }
  }

  return (
    <div className='grid w-full grid-cols-2 gap-5'>
      <Button className='w-full' variant='outline' disabled={stage === 0} onClick={onClickBackBtn}>
        Назад
      </Button>
      <Button className='w-full' disabled={Boolean(!value)} onClick={onClickNextBtn}>
        Далее
      </Button>
    </div>
  );
};

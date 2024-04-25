'use client';
import { useRouter } from 'next/navigation';

import { Button } from '@/ui/button';

import { useAnswers } from './contexts/answers/useAnswers';
import { useStage } from './contexts/stage/useStage';
import { questions } from './constants';

export const ProfTestButtonsContainer = () => {
  const router = useRouter();
  const { stage, setStage } = useStage();
  const { answers } = useAnswers();

  function onClickBackBtn() {
    setStage(stage - 1);
  }
  function calculateResult(strs: Answer[]) {
    const result = strs.map((obj) => obj.value.split('/'));
    const finalResult = result[0]
      .map((_, index) => result.map((arr) => parseFloat(arr[index])).reduce((a, b) => a + b))
      .join('-');
    return finalResult;
  }

  async function onClickNextBtn() {
    if (stage === questions.length - 1) {
      // await
      router.push(`/prof-test/result/${calculateResult(answers)}`);
    } else {
      setStage(stage + 1);
    }
  }

  const value = answers.find((answer) => answer.order === stage + 1)?.value;
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

import { useRouter } from 'next/navigation';

import { Button } from '@/ui/button';
import { Typography } from '@/ui/typography';

interface TestingButtonsProps {
  queue: number;
  queueLength: number;
}

export const TestingButtons = ({ queue, queueLength }: TestingButtonsProps) => {
  const router = useRouter();

  return (
    <div className='flex w-full flex-col items-center gap-5 px-4'>
      <Typography>
        {queue + 1} / {queueLength}
      </Typography>
      <div className='flex w-full gap-5'>
        <Button
          className='w-full'
          variant='outline'
          disabled={queue === 0}
          //   onClick={() => setQueue((prev) => prev - 1)}
        >
          Назад
        </Button>
        <Button className='w-full'>Вперед</Button>
      </div>
    </div>
  );
};

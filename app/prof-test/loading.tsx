import { Skeleton } from '@/ui/skeleton';

const Loading = () => {
  return (
    <main className='container flex h-s-minus-navbar flex-col items-center justify-center '>
      <Skeleton className='size-full max-h-[286px] max-w-lg bg-white sm:max-h-[214px]' />
    </main>
  );
};

export default Loading;

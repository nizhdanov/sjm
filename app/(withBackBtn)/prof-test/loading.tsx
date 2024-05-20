import { Skeleton } from '@/ui/skeleton';

const Loading = () => {
  return (
    <main className='container flex h-s-minus-navbar flex-col items-center justify-center '>
      <Skeleton className='size-full max-h-[214px] max-w-lg bg-white' />
    </main>
  );
};

export default Loading;

import { Skeleton } from '@/ui/skeleton';

const Loading = () => {
  return (
    <main className='mt-5 flex flex-col gap-5'>
      <div className='container'>
        <Skeleton className='h-7 w-full' />
      </div>
      <Skeleton className='h-[400px] w-full bg-white' />
      <div className='container flex flex-col gap-8'>
        <section className='flex flex-col gap-3'>
          <Skeleton className='h-7 w-full' />
          <div className='grid grid-cols-2 gap-2'>
            <div className='flex flex-col gap-2 rounded-md bg-white p-2.5'>
              <Skeleton className='h-6 w-full ' />
              <ul className='flex list-inside list-disc flex-col gap-1 text-xs'>
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-full' />
              </ul>
            </div>
            <div className='flex flex-col gap-2 rounded-md bg-white p-2.5'>
              <Skeleton className='h-6 w-full' />
              <ul className='flex list-inside list-disc flex-col gap-1 text-xs'>
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-full' />
              </ul>
            </div>
          </div>
        </section>
        <section className='flex flex-col gap-3'>
          <Skeleton className='h-7 w-full ' />
          <div className='flex flex-col gap-2'>
            <Skeleton className='h-10 w-full rounded-md bg-white' />
            <Skeleton className='h-10 w-full rounded-md bg-white' />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Loading;

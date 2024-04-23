import Link from 'next/link';

import { Button, buttonVariants } from '@/ui/button';

const Home = () => {
  return (
    <main className='flex flex-col gap-5 px-4 py-5'>
      <Button variant='outline'>Фильтры</Button>
      <Link href='/prof-test' className={buttonVariants()}>
        Пройти тестирование
      </Link>
    </main>
  );
};

export default Home;

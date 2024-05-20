import Link from 'next/link';

import { LogoIcon } from '@/icons/LogoIcon';
import { Span } from '@/ui/typography';

export const Header = () => {
  return (
    <header className='sticky top-0 z-50 mb-5 flex h-14 items-center justify-between border-b border-[#D9DCDF] bg-white px-4'>
      <Link href='/' className='flex items-center gap-[10px] divide-x'>
        <LogoIcon className='h-10 w-auto' />
        <Span className={'pl-[10px] uppercase leading-tight'}>
          карта
          <br />
          путешествия
          <br />
          студента
        </Span>
      </Link>
      <nav>
        <Link href='/'>Главная</Link>
      </nav>
    </header>
  );
};

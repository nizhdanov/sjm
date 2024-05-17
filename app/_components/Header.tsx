import Link from 'next/link';

import { openSans } from '@/fonts';
import { LogoIcon } from '@/icons/LogoIcon';
import { cn } from '@/utils/cn';

export const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex h-14 items-center border-b border-[#D9DCDF] bg-white px-4'>
      <div className='flex items-center gap-[10px] divide-x'>
        <Link href='/'>
          <LogoIcon className='h-10 w-auto' />
        </Link>
        <span className={cn('pl-[10px] text-xs uppercase leading-tight', openSans.className)}>
          карта
          <br />
          путешествия
          <br />
          студента
        </span>
      </div>
    </header>
  );
};

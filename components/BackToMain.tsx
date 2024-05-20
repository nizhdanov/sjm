import Link from 'next/link';

import { cn } from '@/utils/cn';

import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

export const BackToMain = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof Link>, 'href'>) => {
  return (
    <div>
      <Link
        className={cn(
          'flex w-fit items-center justify-start gap-1 text-ui-gray hover:underline',
          className
        )}
        href='/'
        {...props}
      >
        <ArrowLeftIcon />
        Главная страница
      </Link>
    </div>
  );
};

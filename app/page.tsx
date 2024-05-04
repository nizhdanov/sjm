import Link from 'next/link';

import { getAllSpecialties } from '@/lib/api/specialties';
import { Badge } from '@/ui/badge';
import { buttonVariants } from '@/ui/button';
import { Span, Typography } from '@/ui/typography';

const Home = async () => {
  const specialties = await getAllSpecialties();
  return (
    <main className='flex flex-col gap-5 px-4 py-5'>
      {/* <Button variant='outline'>Фильтры</Button> */}
      <Link href='/prof-test' className={buttonVariants()}>
        Тестирование
      </Link>
      <Typography tag='h1' variant='h1'>
        Направления подготовки
      </Typography>
      <ul className='flex list-none flex-col gap-3'>
        {specialties?.map((specialty) => (
          <Link key={specialty.code} href={`/${specialty.code.replaceAll('.', '-')}`}>
            <li className='flex flex-col items-end gap-2 rounded-lg border bg-card p-4 text-card-foreground shadow'>
              <Badge variant='primary-grad'>{specialty.instituteTitle}</Badge>
              <div className='flex w-full items-end justify-between gap-5'>
                <Typography tag='h3' variant='h3'>
                  {specialty.title}
                </Typography>
                <Span>{specialty.code}</Span>
              </div>
              <Span className='self-start'>{specialty.step}</Span>
              <Badge variant='background'>
                <Typography tag='div' variant='primary-gradient'>
                  {specialty.points} проходной балл 2023
                </Typography>
              </Badge>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default Home;

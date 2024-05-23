import Link from 'next/link';

import { getAllSpecialtiesForCards } from '@/lib/api/specialties';
import { Badge } from '@/ui/badge';
import { buttonVariants } from '@/ui/button';
import { Span, Typography } from '@/ui/typography';

const MainPage = async () => {
  const specialties = await getAllSpecialtiesForCards();

  return (
    <main className='container flex flex-col gap-5 py-5 '>
      {/* <Button variant='outline'>Фильтры</Button> */}
      <div className='flex w-full min-w-80 flex-col'>
        <Link href='/prof-test' className={buttonVariants()}>
          Тестирование
        </Link>
      </div>

      <div className='flex w-full flex-col gap-5'>
        <Typography tag='h1' variant='h1'>
          Направления подготовки
        </Typography>
        <ul className='flex list-none flex-col gap-3'>
          {specialties?.map((specialty) => (
            <Link key={specialty.code} href={`/${specialty.code.replaceAll('.', '-')}`}>
              <li className='flex flex-col items-end gap-2 rounded-lg border bg-card p-4 text-card-foreground shadow'>
                <Badge variant='blue-to-purple'>{specialty.faculty.instituteTitle}</Badge>
                <div className='flex w-full items-end justify-between gap-5'>
                  <Typography tag='h3' variant='h3'>
                    {specialty.title}
                  </Typography>
                  <Span>{specialty.code}</Span>
                </div>
                <Span className='self-start'>{specialty.step}</Span>
                <Badge variant='background'>
                  <Typography color='blue-to-purple'>
                    {specialty.educationForms[0]?.minPoints} проходной балл 2023
                  </Typography>
                </Badge>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default MainPage;

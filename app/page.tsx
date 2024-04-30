import Link from 'next/link';

import { getAllSpecialties } from '@/lib/api/specialties';
import { Badge } from '@/ui/badge';
import { buttonVariants } from '@/ui/button';
import { Card } from '@/ui/card';
import { Typography } from '@/ui/typography';

const Home = async () => {
  const specialties = await getAllSpecialties();
  return (
    <main className='flex flex-col gap-5 px-4 py-5'>
      {/* <Button variant='outline'>Фильтры</Button> */}
      <Link href='/prof-test' className={buttonVariants()}>
        Тестирование
      </Link>
      <Typography tag='h2' variant='h2'>
        Направления подготовки
      </Typography>
      <ul className='flex flex-col gap-3 '>
        {specialties.map((specialty) => (
          <li key={specialty.code}>
            <Card className='p-4'>
              <Badge variant='primaryGrad'>Политехнический иститут</Badge>
              <Typography tag='h1' variant='h3'>
                {specialty.title}
              </Typography>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;

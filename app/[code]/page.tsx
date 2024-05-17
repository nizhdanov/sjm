import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import { getDetailedSpecialtyByCode, getSpecialtyTitleByCode } from '@/api/specialties';
import { JourneyMap } from '@/r3f/JourneyMap';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/ui/accordion';
import { buttonVariants } from '@/ui/button';
import { Card, CardContent, CardHeader } from '@/ui/card';
import { Carousel, CarouselContent, CarouselItem, DotButtons } from '@/ui/carousel';
import { Span, Typography } from '@/ui/typography';
import { cn } from '@/utils/cn';

export async function generateMetadata(
  { params }: DetailedSpecialtyProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const code = params.code.replaceAll('-', '.');
  const specialty = await getSpecialtyTitleByCode(code);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: specialty?.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages]
    }
  };
}

interface DetailedSpecialtyProps {
  params: { code: string };
}

const SpecialtyPage = async ({ params }: DetailedSpecialtyProps) => {
  const code = params.code.replaceAll('-', '.');
  const specialty = await getDetailedSpecialtyByCode(code);

  if (!specialty) return redirect('/');

  return (
    <main className='mt-5 flex flex-col gap-5'>
      <div className='container'>
        <Typography tag='h1' variant='h1'>
          {specialty.title} <Span>{specialty.code}</Span>
        </Typography>
      </div>
      <JourneyMap className='h-[400px] w-full' courses={specialty.courses} />
      <div className='container flex flex-col gap-8'>
        <section className='flex flex-col gap-3'>
          <Typography tag='h2' variant='h2'>
            Формы обучения
          </Typography>
          <div className='grid grid-cols-2 gap-2'>
            {specialty.educationForms.map((form) => (
              <div key={form.id} className='flex flex-col gap-2 rounded-md bg-white p-2.5'>
                <Typography tag='h3' color='blue-to-green' variant='h3' className='w-fit'>
                  {form.name}
                </Typography>
                <ul className='flex list-inside list-disc flex-col gap-1 text-xs'>
                  <li>{form.budget ? `${form.budget} мест бюджет` : '-'}</li>
                  <li>{form.commercial ? `${form.commercial} мест коммерция` : '-'}</li>
                  <li>{form.targeted ? `${form.targeted} мест целевое` : '-'}</li>
                  <li>{form.cost ? `${form.cost}₽ в год` : '-'}</li>
                  <li>{form.time ? `${form.time}` : '-'}</li>
                  <li>{form.minPoints ? `проходной балл ${form.minPoints}` : '-'}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className='flex flex-col gap-3'>
          <Typography tag='h2' variant='h2'>
            Документы
          </Typography>
          <div className='flex flex-col gap-2'>
            <a
              href='/files/pravila_priema_2024.pdf'
              className='flex flex-col rounded-md bg-white px-4 py-2'
            >
              <Typography tag='h3' variant='h3'>
                Правила приёма 2024
              </Typography>
            </a>
            <a
              href='/files/presentation_about.pptx'
              className='flex flex-col rounded-md bg-white px-4 py-2'
            >
              <Typography tag='h3' variant='h3'>
                Презентация о СурГУ
              </Typography>
            </a>
          </div>
        </section>
        <section className='flex flex-col gap-3'>
          <Typography tag='h2' variant='h2'>
            Преподаватели
          </Typography>
          <Carousel className='w-full'>
            <CarouselContent>
              {specialty.faculty.teachers.map((teacher, index) => (
                <CarouselItem key={index} className='lg:basis-1/2 '>
                  <Card className='flex h-full flex-col'>
                    <CardHeader className='items-center text-center'>
                      <Image
                        alt=''
                        src={`/photos/${teacher.image}.jpg`}
                        width={128}
                        height={128}
                        className='size-32 rounded-full object-cover '
                      />
                      <Typography tag='h3' variant='h3'>
                        {teacher.firstName} {teacher.midlleName} {teacher.lastName}
                      </Typography>
                      <Typography tag='p' variant='p'>
                        {teacher.workStatus}
                      </Typography>
                    </CardHeader>
                    <CardContent>
                      <Typography tag='h3' variant='h3' className='pb-2'>
                        Специализация
                      </Typography>
                      <ul className='ro flex list-none flex-wrap gap-1 pb-3'>
                        {teacher.skills.slice(0, 3).map(({ skillName }) => (
                          <li key={skillName} className='rounded-md bg-background px-2 py-1'>
                            <Typography
                              tag='div'
                              variant='base'
                              className='text-xs font-semibold'
                              color='blue-to-purple'
                            >
                              {skillName}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                      <Typography tag='h3' variant='h3' className='pb-2'>
                        Преподаваемые дисциплины
                      </Typography>
                      <ul className='ro flex list-none flex-wrap gap-1'>
                        {teacher.subjects.slice(0, 3).map(({ subjectName }) => (
                          <li key={subjectName} className=' rounded-md bg-background px-2 py-1'>
                            <Typography
                              tag='div'
                              variant='base'
                              className='text-xs font-semibold'
                              color='blue-to-purple'
                            >
                              {subjectName}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <DotButtons />
          </Carousel>
        </section>
        <section className='flex flex-col gap-3'>
          <Typography tag='h2' variant='h2'>
            Стипендии
          </Typography>
          <ul className='flex list-none flex-col gap-2.5 md:flex-row md:flex-wrap'>
            {specialty.scholarships.map((scholarship) => (
              <li
                key={scholarship.id}
                className='flex flex-col items-center rounded-md bg-white p-2.5'
              >
                <Typography tag='h3' variant='h3'>
                  {scholarship.name}
                </Typography>
                <Typography tag='p' variant='base'>
                  {scholarship.from} - {scholarship.to}₽
                </Typography>
              </li>
            ))}
          </ul>
        </section>
        <section className='flex w-full flex-col gap-3 md:max-w-[50%]'>
          <Typography tag='h2' variant='h2'>
            Часто задаваемые вопросы
          </Typography>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Где можно узнать подробнее об общежитии?</AccordionTrigger>
              <AccordionContent>
                <a
                  className={cn(buttonVariants({ variant: 'link', size: 'sm' }), 'text-sm')}
                  href='https://www.surgu.ru/zhizn-surgu/sotsialnaya-podderzhka-i-obespechenie/obschezhitie'
                >
                  Общежитие
                </a>
                <a
                  className={cn(buttonVariants({ variant: 'link', size: 'sm' }), 'text-sm')}
                  href='https://www.surgu.ru/obschezhitiy/poryadok-zaseleniya-v-studencheskoe-obschezhitie-surgu/Informatsiya%20dlya%20%20vpervye%20zaselyayushchikhsya%20studentov'
                >
                  Для впервые заселяющихся студентов
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>Куда подавать документы?</AccordionTrigger>
              <AccordionContent>
                <a
                  className={cn(buttonVariants({ variant: 'link', size: 'sm' }), 'text-sm')}
                  href={`https://go.surgu.ru/${code.replaceAll('.', '')}`}
                >
                  Приёмная комиссия
                </a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </main>
  );
};

export default SpecialtyPage;

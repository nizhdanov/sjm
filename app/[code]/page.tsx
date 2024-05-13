import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';

import { getDetailedSpecialtyByCode, getSpecialtyTitleByCode } from '@/api/specialties';
import { JourneyMap } from '@/r3f/JourneyMap';
import { Span, Typography } from '@/ui/typography';

interface DetailedSpecialtyProps {
  params: { code: string };
}

export async function generateMetadata(
  { params }: DetailedSpecialtyProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const code = params.code.replaceAll('-', '.');

  // fetch data
  const specialty = await getSpecialtyTitleByCode(code);
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: specialty?.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages]
    }
  };
}

const DetailedSpecialty = async ({ params }: DetailedSpecialtyProps) => {
  const code = params.code.replaceAll('-', '.');
  const specialty = await getDetailedSpecialtyByCode(code);

  if (!specialty) return redirect('/');

  return (
    <main className='mt-5 flex flex-col gap-5'>
      <Typography tag='h1' variant='h1' className='px-4'>
        {specialty.title} <Span>{specialty.code}</Span>
      </Typography>
      <JourneyMap className='h-[400px] w-full' courses={specialty.courses} />
      <div className='container flex flex-col gap-8'>
        <section className='flex flex-col gap-3'>
          <Typography tag='h2' variant='h2'>
            Формы обучения
          </Typography>
          <div className='grid grid-cols-2 gap-2'>
            {specialty.educationForms.map((form) => (
              <div key={form.id} className='flex flex-col gap-2 rounded-md bg-white p-2.5'>
                <Typography tag='h3' color='blue-to-green' className='font-semibold'>
                  {form.name}
                </Typography>
                <ul className='flex list-inside list-disc flex-col gap-1 text-xs'>
                  <li>{form.budget ? `${form.budget} мест бюджет` : '-'}</li>
                  <li>{form.commercial ? `${form.commercial} мест коммерция` : '-'}</li>
                  <li>{form.targeted ? `${form.targeted} мест целевое` : '-'}</li>
                  <li>{form.cost ? `${form.cost}₽ в год` : '-'}</li>
                  <li>{form.time}</li>
                  <li>{form.minPoints ? `проходной балл ${form.minPoints}` : '-'}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>
        {/* <section className='flex flex-col gap-3'>
          <Typography tag='h2' variant='h2'>
            Документы
          </Typography>
          <div className='flex flex-col gap-2'>
            {specialty.documents.map((document) => (
              <div key={document.title} className='flex flex-col px-4 py-2'>
                <Typography tag='h3' variant='h3'>
                  {document.title}
                </Typography>
                <Typography tag='p' variant='span'>
                  {document.description}
                </Typography>
              </div>
            ))}
          </div>
        </section> */}
        <section className='flex flex-col gap-3'>
          <Typography tag='h2' variant='h2'>
            Преподаватели
          </Typography>
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
        <section className='flex flex-col gap-3'>
          <Typography tag='h2' variant='h2'>
            Компании, в которых работают наши выпускники
          </Typography>
        </section>
      </div>
    </main>
  );
};

export default DetailedSpecialty;

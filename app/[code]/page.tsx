import { redirect } from 'next/navigation';

import { getDetailedSpecialtyByCode } from '@/api/specialties';
import { JourneyMap } from '@/r3f/JourneyMap';
import { Span, Typography } from '@/ui/typography';

interface ProfTestResultProps {
  params: { code: string };
}

const ProfTestResult = async ({ params }: ProfTestResultProps) => {
  const specialty = await getDetailedSpecialtyByCode(params.code.replaceAll('-', '.'));

  if (!specialty) return redirect('/');

  return (
    <main className='mt-5 flex flex-col gap-5 '>
      <Typography tag='h1' variant='h1' className='px-4'>
        {specialty.title} <Span>{specialty.code}</Span>
      </Typography>
      <JourneyMap className='h-[400px] w-full' specialty={specialty} />
      <div className='flex flex-col gap-8 px-4'>
        <section>
          <Typography tag='h2' variant='h2'>
            Формы обучения
          </Typography>
          <div className='grid grid-cols-2 gap-2'>
            <div></div>
            <div></div>
          </div>
        </section>
        {/* <section>
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
      </div>
    </main>
  );
};

export default ProfTestResult;

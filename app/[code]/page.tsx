import { redirect } from 'next/navigation';

import { getSpecialtyByCode } from '@/api/specialties';
import { JourneyMap } from '@/r3f/JourneyMap';
import { Typography } from '@/ui/typography';

interface ProfTestResultProps {
  params: { code: string };
}

const ProfTestResult = async ({ params }: ProfTestResultProps) => {
  const specialty = await getSpecialtyByCode(params.code.replaceAll('-', '.'));

  if (!specialty) return redirect('/');

  return (
    <>
      <div className='mt-5 flex flex-col gap-5 px-4'>
        <Typography tag='h2'>{specialty.title}</Typography>
      </div>
      <JourneyMap className='h-[400px] w-full' />
    </>
  );
};

export default ProfTestResult;

import { redirect } from 'next/navigation';

import { getAllQuestions } from '@/lib/api/questions';

import { ProfTestContainer } from './_components/ProfTestContainer';
import { ProfTestProviders } from './_components/ProfTestProviders';

const ProfTest = async () => {
  const questions = await getAllQuestions();

  if (!questions) return redirect('/');

  return (
    <ProfTestProviders>
      <ProfTestContainer questions={questions} />
    </ProfTestProviders>
  );
};

export default ProfTest;

import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { getAllQuestions } from '@/lib/api/questions';

import { ProfTestContainer } from './_components/ProfTestContainer';
import { ProfTestProviders } from './_components/ProfTestProviders';

export const metadata: Metadata = {
  title: 'Профориентационное тестирование',
  description:
    'Пройдите профориентационное тестирование и узнайте о подходящих вам направлениях подготовки в СурГУ'
};

const ProfTestPage = async () => {
  const questions = await getAllQuestions();

  if (!questions) return redirect('/');

  return (
    <ProfTestProviders>
      <ProfTestContainer questions={questions} />
    </ProfTestProviders>
  );
};

export default ProfTestPage;

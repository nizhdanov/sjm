import { getAllQuestions } from '@/lib/api/questions';

import { ProfTestContainer } from './_components/ProfTestContainer';
import { ProfTestProviders } from './_components/ProfTestProviders';

const ProfTest = async () => {
  const questions = await getAllQuestions();
  console.log(questions);
  return (
    <ProfTestProviders>
      <ProfTestContainer />
    </ProfTestProviders>
  );
};

export default ProfTest;

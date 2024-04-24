import { ProfTestContainer } from './_components/ProfTestContainer';
import { ProfTestProviders } from './_components/ProfTestProviders';

interface ProfTestProps {
  // searchParams: { [key: string]: string | string[] | undefined };
}

const ProfTest = ({}: ProfTestProps) => {
  // await questions
  return (
    <ProfTestProviders>
      <ProfTestContainer />
    </ProfTestProviders>
  );
};

export default ProfTest;

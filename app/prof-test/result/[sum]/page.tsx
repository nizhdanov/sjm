import { DirectionCard } from './_components/DirectionCard';

interface ProfTestResultProps {
  params: { sum: string };
}

const directions = ['ivt', 'isit', 'pi', 'uts'];

const ProfTestResult = ({ params }: ProfTestResultProps) => {
  // await questions
  const koefs = params.sum.split('-');

  const directionsWithKoefs = directions
    .map((direction, index) => ({
      direction,
      koef: `${parseFloat(koefs[index]) * 100}%`
    }))
    .sort((a, b) => parseFloat(b.koef) - parseFloat(a.koef));

  return (
    <div className='mt-5 flex flex-col gap-5 px-4'>
      {directionsWithKoefs.map((direction) => (
        <DirectionCard key={direction.direction} {...direction} />
      ))}
    </div>
  );
};

export default ProfTestResult;

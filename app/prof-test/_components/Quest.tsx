'use client';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/ui/card';
import { Label } from '@/ui/label';
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';
import { Typography } from '@/ui/typography';

import { useAnswers } from './contexts/answers/useAnswers';
import { useStage } from './contexts/stage/useStage';
import { questions } from './constants';

export const Quest = () => {
  const { stage } = useStage();

  const question = questions[stage];
  const { answers, setAnswers } = useAnswers();
  function onValueChange(value: string) {
    const oldAnswers = answers.filter((answer) => answer.order !== question.order);
    const newAnswers = [...oldAnswers, { order: question.order, value: value }];
    setAnswers(newAnswers);
  }

  return (
    <>
      <div className='flex w-full flex-col gap-5 px-4 py-5'>
        <Typography tag='h1'>{question.body}</Typography>
        <Card>
          <CardHeader>
            <CardTitle>{question.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              asChild
              defaultValue={answers.find((answer) => answer.order === question.order)?.value}
              onValueChange={(value) => onValueChange(value)}
            >
              <ul className='flex list-none flex-col space-y-1'>
                {question.options.map((option) => (
                  <li key={option.id} className='flex items-center space-x-2'>
                    <RadioGroupItem value={option.value} id={option.id} />
                    <Label htmlFor={option.id}>{option.label}</Label>
                  </li>
                ))}
              </ul>
            </RadioGroup>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
      <Typography>
        {question.order} / {questions.length}
      </Typography>
    </>
  );
};

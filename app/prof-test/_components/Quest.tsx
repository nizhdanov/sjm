'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/ui/card';
import { Label } from '@/ui/label';
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';
import { Typography } from '@/ui/typography';

import { useAnswers } from './contexts/answers/useAnswers';

interface QuestProps {
  question: QuestionWithOptions;
  questionsLenght: number;
}

export const Quest = ({ question, questionsLenght }: QuestProps) => {
  const { answers, setAnswers } = useAnswers();
  function onValueChange(value: string) {
    const oldAnswers = answers.filter((answer) => answer.order !== question.order);
    const newAnswers = [...oldAnswers, { order: question.order, optionId: value }];
    setAnswers(newAnswers);
  }

  return (
    <div className='flex w-full flex-col gap-5 px-4 py-5'>
      <Typography>
        {question.order} / {questionsLenght}
      </Typography>
      <Card>
        <CardHeader>
          <CardTitle>{question.body}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            asChild
            defaultValue={answers.find((answer) => answer.order === question.order)?.optionId}
            onValueChange={(value) => onValueChange(value)}
          >
            <ul className='flex list-none flex-col space-y-1'>
              {question.options.map((option) => (
                <li key={option.id} className='flex items-center space-x-2'>
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label htmlFor={option.id}>{option.label}</Label>
                </li>
              ))}
            </ul>
          </RadioGroup>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

'use client';
import { useSetAtom } from 'jotai';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/ui/card';
import { Label } from '@/ui/label';
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';
import { Typography } from '@/ui/typography';

import { answersAtom } from './atoms';
import { Question } from './TestingContainer';

interface TestingFormProps {
  question: Question;
  queue: number;
}

export const TestingCard = ({ question, queue }: TestingFormProps) => {
  const setAnswers = useSetAtom(answersAtom);

  // function onSubmit() {
  //   if (queue < testing.length - 1) {
  //     setQueue((prev) => prev + 1);
  //     form.setValue('selectedValue', undefined!);
  //   } else {
  // setAnswers((prev) => {
  //   const answers = prev.filter((answer) => answer.id !== queue);

  //   return [...answers, { id: queue, value: data.selectedValue }];
  // });
  //     router.push('/testing/result');
  //   }
  // }

  function onValueChange(value: string) {
    setAnswers((prev) => {
      const answers = prev.filter((answer) => answer.id !== queue);

      return [...answers, { id: queue, value: value }];
    });
  }

  return (
    <div className='flex w-full flex-col gap-5 px-4 py-5'>
      <Typography tag='h1'>{question.body}</Typography>
      <Card>
        <CardHeader>
          <CardTitle>{question.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            onValueChange={(value) => {
              console.log(value);
            }}
            className='flex flex-col space-y-1'
          >
            {question.options.map((option) => (
              <div key={option.id} className='flex items-center space-x-2'>
                <RadioGroupItem value={option.weight} id={option.id} />
                <Label htmlFor={option.id}>{option.value}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

'use client';

import { useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { Label } from '@/ui/label';
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';
import { cn } from '@/utils/cn';

import { useAnswers } from '../_contexts/answers/useAnswers';

interface QuestCardProps {
  question: QuestionWithOptions;
}

export const QuestCard = ({ question }: QuestCardProps) => {
  const { answers, setAnswers } = useAnswers();
  const [value, setValue] = useState(
    answers.find((answer) => answer.order === question.order)?.optionId
  );

  function onValueChange(val: string) {
    setValue(val);
    const oldAnswers = answers.filter((answer) => answer.order !== question.order);
    const newAnswers = [...oldAnswers, { order: question.order, optionId: val }];
    setAnswers(newAnswers);
  }

  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle className='text-foreground'>{question.body}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup asChild defaultValue={value} onValueChange={(val) => onValueChange(val)}>
          <ul className='flex list-none flex-col space-y-1'>
            {question.options.map((option) => (
              <li
                key={option.id}
                className={cn(
                  'flex items-center space-x-2 rounded-lg bg-background p-4 ',
                  value === option.id && 'outline outline-2 outline-offset-2 outline-primary'
                )}
              >
                <RadioGroupItem value={option.id} id={option.id} />
                <Label htmlFor={option.id}>{option.label}</Label>
              </li>
            ))}
          </ul>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

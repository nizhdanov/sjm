'use client';
import { useState } from 'react';

import { Button } from '@/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/ui/card';
import { Label } from '@/ui/label';
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';
import { Typography } from '@/ui/typography';

import { questions } from './constants';

interface Question {
  order: number;
  body: string;
  question: string;
  options: {
    id: string;
    value: string;
    label: string;
  }[];
}

interface Answer {
  order: number;
  value: string;
}

export const ProfTestContainer = () => {
  const [answers, setAnswers] = useState<Answer[]>([]!);
  const [question, setQuestion] = useState(questions[0]);
  const [radioValue, setRadioValue] = useState<string | undefined>(undefined!);

  function onClickBackBtn() {
    if (question.order > 1) {
      setQuestion(questions.find((q) => q.order === question.order - 1)!);
      setRadioValue(answers.find((answer) => answer.order === question.order - 1)?.value);
    }
  }

  function onClickNextBtn() {
    if (question.order < questions.length) {
      setQuestion(questions.find((q) => q.order === question.order + 1)!);
      setRadioValue(answers.find((answer) => answer.order === question.order + 1)?.value);
    }
  }

  function onValueChange(value: string) {
    setAnswers((prev) => {
      const answers = prev.filter((answer) => answer.order !== question.order);
      return [...answers, { order: question.order, value: value }];
    });
    if (!radioValue && question.order < questions.length) {
      setQuestion(questions.find((q) => q.order === question.order + 1)!);
      setRadioValue(answers.find((answer) => answer.order === question.order + 1)?.value);
    }
    setRadioValue(value);
  }

  return (
    <main className='flex flex-col justify-between'>
      {answers.map((answer) => (
        <Typography key={answer.order}>
          #{answer.order}={answer.value}
        </Typography>
      ))}
      <div className='flex w-full flex-col items-center gap-5 px-4'>
        <Typography>
          {question.order} / {questions.length}
        </Typography>
        <div className='grid w-full grid-cols-2 gap-5'>
          <Button className='w-full' variant='outline' onClick={onClickBackBtn}>
            Назад
          </Button>
          {radioValue && (
            <Button className='w-full' onClick={onClickNextBtn}>
              Далее
            </Button>
          )}
        </div>
      </div>
    </main>
  );
};

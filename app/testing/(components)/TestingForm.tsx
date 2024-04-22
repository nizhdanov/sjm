'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

import { Button } from '@/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/ui/form';
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';
import { Typography } from '@/ui/typography';

import { answersAtom } from './atoms';

const testing = [
  {
    body: '',
    question: 'quest 1',
    options: [
      {
        id: '1.1',
        weight: 1,
        value: 'test1'
      },
      {
        id: '1.2',
        weight: 1,
        value: 'test2'
      },
      {
        id: '1.3',
        weight: 1,
        value: 'test3'
      }
    ]
  },
  {
    body: '',
    question: 'quest 2',
    options: [
      {
        id: '2.1',
        weight: 1,
        value: 'test1'
      },
      {
        id: '2.2',
        weight: 1,
        value: 'test2'
      },
      {
        id: '2.3',
        weight: 1,
        value: 'test3'
      }
    ]
  }
];

const schema = z.object({
  selectedValue: z.string()
});

export const TestingForm = () => {
  const router = useRouter();
  const [num, setNum] = useState(0);
  const setAnswers = useSetAtom(answersAtom);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
    if (num < testing.length - 1) {
      setNum((prev) => prev + 1);
      form.setValue('selectedValue', undefined!);
    } else {
      setAnswers((prev) => {
        const answers = prev.filter((answer) => answer.id !== num);

        return [...answers, { id: num, value: data.selectedValue }];
      });
      router.push('/testing/result');
    }
  }

  return (
    <main className='flex w-full flex-col gap-5 px-4 py-5'>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Typography tag='h1'>{testing[num].body}</Typography>
        <Card>
          <CardHeader>
            <CardTitle>{testing[num].question}</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <FormField
                control={form.control}
                name='selectedValue'
                render={({ field }) => (
                  <FormItem className='space-y-3'>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className='flex flex-col space-y-1'
                      >
                        {testing[num].options.map((option) => (
                          <FormItem
                            key={option.id}
                            className='flex items-center space-x-3 space-y-0'
                          >
                            <FormControl>
                              <RadioGroupItem value={option.value} />
                            </FormControl>
                            <FormLabel className='font-normal'>{option.value}</FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </Form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <div className='flex w-full flex-col items-center gap-5'>
          <Typography>
            {num + 1} / {testing.length}
          </Typography>
          <div className='flex w-full gap-5'>
            <Button
              className='w-full'
              variant='outline'
              disabled={num === 0}
              onClick={() => setNum((prev) => prev - 1)}
            >
              Назад
            </Button>
            <Button className='w-full' type='submit' disabled={!form.formState.isValid}>
              Вперед
            </Button>
          </div>
        </div>
      </form>
    </main>
  );
};

'use client';
import { useState } from 'react';

import { TestingButtons } from './TestingButtons';
import { TestingCard } from './TestingCard';

const questions = [
  {
    body: '',
    question: 'quest 1',
    options: [
      {
        id: '1.1',
        weight: '1',
        value: 'first1'
      },
      {
        id: '1.2',
        weight: '2',
        value: 'first2'
      },
      {
        id: '1.3',
        weight: '3',
        value: 'idk'
      }
    ]
  },
  {
    body: '',
    question: 'quest 2',
    options: [
      {
        id: '2.1',
        weight: '1',
        value: 'second1'
      },
      {
        id: '2.2',
        weight: '2',
        value: 'second2'
      },
      {
        id: '2.3',
        weight: '3',
        value: 'idk'
      }
    ]
  }
];

export interface Question {
  body: string;
  question: string;
  options: {
    id: string;
    weight: string;
    value: string;
  }[];
}

export const TestingContainer = () => {
  const [queue, setQueue] = useState(0);

  return (
    <main className='flex flex-col justify-between'>
      <TestingCard question={questions[queue]} queue={queue} />
      <TestingButtons queue={queue} queueLength={questions.length} />
    </main>
  );
};

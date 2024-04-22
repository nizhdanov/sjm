import { atom } from 'jotai';

interface AnswerAtomProps {
  id: number;
  value: string;
}

export const answersAtom = atom<AnswerAtomProps[]>([]);

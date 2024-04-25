import { prisma } from './prisma';

export const getAllQuestions = async () =>
  await prisma.question.findMany({
    include: { options: true }
  });

import { prisma } from './prisma';

export const getAllQuestions = async () =>
  await prisma.question.findMany({
    include: { options: true }
  });

export const postCalculateResult = async (data: string[]) => {
  const o = await prisma.option.findMany({
    where: {
      id: data[0]
    }
  });
  console.log(o);
};

import { Value } from '@prisma/client';

import { prisma } from './prisma';

export const getAllQuestions = async () =>
  await prisma.question.findMany({
    include: { options: true }
  });

export const postCalculateResult = async (data: string[]) => {
  const options = await prisma.option.findMany({
    where: {
      OR: data.map((optionId) => ({ id: optionId }))
    },
    select: {
      values: true
    }
  });
  let values: Value[] = [];

  const valuesId = options.flatMap(({ values }) => values).map(({ valueId }) => valueId);

  for (const id of valuesId) {
    const foundValue = await prisma.value.findUnique({ where: { id } });
    if (foundValue) {
      values.push(foundValue);
    }
  }

  const result = values.reduce((acc, value) => {
    const existingValue = acc.find((v) => v.specialtyCode === value.specialtyCode);
    if (existingValue) {
      existingValue.sum += value.weight;
    } else {
      acc.push({
        sum: value.weight,
        specialtyCode: value.specialtyCode
      });
    }
    return acc;
  }, []);

  return result;
};

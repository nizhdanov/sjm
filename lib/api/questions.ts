import { Value } from '@prisma/client';

import { prisma } from './prisma';

interface Accumulator {
  [key: string]: { specialtyCode: string; sum: number };
}

export const getAllQuestions = async () =>
  await prisma.question.findMany({
    include: { options: true }
  });

export const postCalculateResult = async (data: string[]) => {
  try {
    const options = await prisma.option.findMany({
      where: {
        OR: data.map((optionId) => ({ id: optionId }))
      },
      select: {
        values: true
      }
    });

    const valuesInOptions = options.flatMap(({ values }) => values);

    let values: Value[] = [];

    for (const valueOption of valuesInOptions) {
      const foundedValue = await prisma.value.findUnique({ where: { id: valueOption.valueId } });
      if (foundedValue) {
        values.push(foundedValue);
      }
    }

    const result = Object.values(
      values.reduce((acc: Accumulator, { specialtyCode, weight }) => {
        if (!acc[specialtyCode]) {
          acc[specialtyCode] = { specialtyCode, sum: 0 };
        }
        acc[specialtyCode].sum += weight;
        return acc;
      }, {})
    );

    result.sort((a, b) => b.sum - a.sum);

    return result;
  } catch (error) {
    console.error(error);
  }
};

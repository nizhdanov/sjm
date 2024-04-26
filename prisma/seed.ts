/* eslint-disable no-console */
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const specialtiesData: Prisma.SpecialtyCreateInput[] = [
  // ivt
  {
    code: '09.03.01',
    title: 'Информатика и вычислительная техника',
    values: {
      create: [
        {
          weight: 0.5
        },
        {
          weight: 0.2
        },
        {
          weight: 0.3
        },
        {
          weight: 0
        }
      ]
    }
  },
  // isit
  {
    code: '09.03.02',
    title: 'Информационные системы и технологии',
    values: {
      create: [
        {
          weight: 0.3
        },
        {
          weight: 0.5
        },
        {
          weight: 0.2
        },
        {
          weight: 0
        }
      ]
    }
  },
  // pi
  {
    code: '09.03.04',
    title: 'Программная инженерия',
    values: {
      create: [
        {
          weight: 0.2
        },
        {
          weight: 0
        },
        {
          weight: 0.5
        },
        {
          weight: 0.3
        }
      ]
    }
  },
  // uts
  {
    code: '27.03.04',
    title: 'Управление в технических системах',
    values: {
      create: [
        {
          weight: 0
        },
        {
          weight: 0.3
        },
        {
          weight: 0
        },
        {
          weight: 0.5
        }
      ]
    }
  }
];

const questionsData: Prisma.QuestionCreateInput[] = [
  {
    body: 'Что вы обычно делаете, когда сталкиваетесь с проблемой?',
    order: 1,
    options: {
      create: [
        {
          label: 'Люблю анализировать проблему и искать технические решения'
        },
        {
          label: 'Ищу способы автоматизации решения'
        },
        {
          label: 'Думаю, как программно можно решить эту проблему'
        },
        {
          label: 'Составляю план и последовательность шагов для решения'
        }
      ]
    }
  },
  {
    body: 'Какой из этих проектов вы бы предпочли делать?',
    order: 2,
    options: {
      create: [
        {
          label: 'Создание умного дома, подключенного к сети'
        },
        {
          label: 'Разработка приложения для автоматизации учета времени в проектах'
        },
        {
          label: 'Создание новой компьютерной игры'
        },
        {
          label: 'Оптимизация работы местной транспортной системы'
        }
      ]
    }
  }
];

async function main() {
  console.log(`Start seeding ...`);

  for (const s of specialtiesData) {
    await prisma.specialty.create({
      data: s
    });
  }

  for (const q of questionsData) {
    await prisma.question.create({
      data: q
    });
  }

  const optionsOrder1 = await prisma.option.findMany({
    where: {
      questionOrder: 1
    }
  });

  const optionsOrder2 = await prisma.option.findMany({
    where: {
      questionOrder: 2
    }
  });

  const valuesIvt = await prisma.value.findMany({
    where: {
      specialtyCode: '09.03.01'
    }
  });

  const valuesIsit = await prisma.value.findMany({
    where: {
      specialtyCode: '09.03.02'
    }
  });

  const valuesPi = await prisma.value.findMany({
    where: {
      specialtyCode: '09.03.04'
    }
  });

  const valuesUts = await prisma.value.findMany({
    where: {
      specialtyCode: '27.03.04'
    }
  });

  let i = 0;
  for (const o of optionsOrder1) {
    await prisma.valuesInOptions.create({
      data: {
        optionId: o.id,
        valueId: valuesIvt[i].id
      }
    });
    await prisma.valuesInOptions.create({
      data: {
        optionId: o.id,
        valueId: valuesIsit[i].id
      }
    });
    await prisma.valuesInOptions.create({
      data: {
        optionId: o.id,
        valueId: valuesPi[i].id
      }
    });
    await prisma.valuesInOptions.create({
      data: {
        optionId: o.id,
        valueId: valuesUts[i].id
      }
    });
    i++;
  }

  i = 0;
  for (const o of optionsOrder2) {
    await prisma.valuesInOptions.create({
      data: {
        optionId: o.id,
        valueId: valuesIvt[i].id
      }
    });
    await prisma.valuesInOptions.create({
      data: {
        optionId: o.id,
        valueId: valuesIsit[i].id
      }
    });
    await prisma.valuesInOptions.create({
      data: {
        optionId: o.id,
        valueId: valuesPi[i].id
      }
    });
    await prisma.valuesInOptions.create({
      data: {
        optionId: o.id,
        valueId: valuesUts[i].id
      }
    });
    i++;
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

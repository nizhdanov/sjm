/* eslint-disable no-console */
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// const subjectsData: Prisma.SubjectCreateInput[] = [
//   {
//     name: 'Базы данных'
//   },
//   {
//     name: 'Основы Информационной безопасности'
//   },
//   {
//     name: 'Ин.яз'
//   },
//   {
//     name: 'Введение в проф деятельность'
//   },
//   {
//     name: 'Алгоритмы и структуры данных'
//   },
//   {
//     name: 'Математический анализ'
//   },
//   {
//     name: 'ФК'
//   },
//   {
//     name: 'Программирование'
//   },
//   {
//     name: 'Дискретная математика'
//   },
//   {
//     name: 'Дифференциальные уравнения'
//   },
//   {
//     name: 'Безопасность баз данных'
//   },
//   {
//     name: 'Прикладная криптография'
//   },
//   {
//     name: 'Основы проектной деятельности'
//   },
//   {
//     name: 'Операционные системы '
//   },
//   {
//     name: 'Работа в команде'
//   },
//   {
//     name: 'Сети ЭВМ'
//   },
//   {
//     name: 'Большие данные'
//   },
//   {
//     name: 'Архитектура ИС'
//   },
//   {
//     name: 'Моделирование систем'
//   },
//   {
//     name: 'Администрирование в ИС'
//   },
//   {
//     name: 'Управление IT проектами'
//   },
//   {
//     name: 'Тестирование и сопровождение ПО'
//   },
//   {
//     name: 'Методы защиты'
//   },
//   {
//     name: 'Методы проектирования ИС'
//   },
//   {
//     name: 'Профессиональный англиский'
//   },
//   {
//     name: 'Информационная безопасность и защита'
//   }
// ];

const institutesData: Prisma.InstituteCreateInput[] = [
  {
    title: 'Политехнический институт',
    specialties: {
      create: [
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
          },
          step: 'Бакалавриат',
          points: 180
        },
        // isit
        {
          code: '09.03.02',
          title: 'Информационные системы и технологии',
          courses: {
            create: [
              {
                year: 1,
                descrition:
                  'На первом курсе вы обучитесь таким фундаментальным дисциплинам, как базы данных, алгоритмы и структуры данных. Все эти дисциплины помогут начать создавать собственные приложения, участвовать в хакатонах и различных грантах. Первый курс это начало пути к таким профессиям как системный аналитик, администратор баз данных, руководитель в области информационных технологий'
              },
              {
                year: 2,
                descrition:
                  'На втором курсе вы сможете выбрать вид спорта, в котором хотите развиваться. Ознакомитесь с сосновыми методами защиты информации и баз данных, а углубленное изучение математики поможет в разработке сложных и интересных приложений. Например, дискретная математика лежит в основе всех сервисов доставки и такси'
              }
            ]
          },
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
          },
          step: 'Бакалавриат',
          points: 200
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
          },
          step: 'Бакалавриат',
          points: 212
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
          },
          step: 'Бакалавриат',
          points: 156
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

  // const uniqueSubjectsData = subjectsData.filter(
  //   (subject, index, self) => index === self.findIndex((s) => s.name === subject.name)
  // );

  // for (const s of uniqueSubjectsData) {
  //   await prisma.subject.create({
  //     data: s
  //   });
  // }

  for (const i of institutesData) {
    await prisma.institute.create({
      data: i
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

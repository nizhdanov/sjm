/* eslint-disable no-console */
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const specialtiesData: Prisma.SpecialtyCreateInput[] = [
  // ivt
  {
    code: '09.03.01',
    title: 'Информатика и вычислительная техника'
  },
  // isit
  {
    code: '09.03.02',
    title: 'Информационные системы и технологии'
  },
  // pi
  {
    code: '09.03.04',
    title: 'Программная инженерия'
  },
  // uts
  {
    code: '27.03.04',
    title: 'Управление в технических системах'
  }
];

const ivtConnect = {
  code: '09.03.01'
};

const valuesData: Prisma.ValueCreateInput[] = [
  {
    weight: 0.5,
    speciality: {
      connect: ivtConnect
    }
  },
  {
    weight: 0.3,
    speciality: {
      connect: {
        code: '09.03.02'
      }
    }
  },
  {
    weight: 0.2,
    speciality: {
      connect: {
        code: '09.03.04'
      }
    }
  },
  {
    weight: 0,
    speciality: {
      connect: {
        code: '27.03.04'
      }
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
          label: 'Люблю анализировать проблему и искать технические решения',
          values: {
            create: [
              {
                weight: 0.5,
                speciality: {
                  connect: {
                    code: '09.03.01'
                  }
                }
              },
              {
                weight: 0.3,
                speciality: {
                  connect: {
                    code: '09.03.02'
                  }
                }
              },
              {
                weight: 0.2,
                speciality: {
                  connect: {
                    code: '09.03.04'
                  }
                }
              },
              {
                weight: 0,
                speciality: {
                  connect: {
                    code: '27.03.04'
                  }
                }
              }
            ]
          }
        },
        {
          label: 'Ищу способы автоматизации решения',
          values: {
            create: [
              {
                weight: 0.2,
                speciality: {
                  connect: {
                    code: '09.03.01'
                  }
                }
              },
              {
                weight: 0.5,
                speciality: {
                  connect: {
                    code: '09.03.02'
                  }
                }
              },
              {
                weight: 0,
                speciality: {
                  connect: {
                    code: '09.03.04'
                  }
                }
              },
              {
                weight: 0.3,
                speciality: {
                  connect: {
                    code: '27.03.04'
                  }
                }
              }
            ]
          }
        },
        {
          label: 'Думаю, как программно можно решить эту проблему',
          values: {
            create: [
              {
                weight: 0.3,
                speciality: {
                  connect: {
                    code: '09.03.01'
                  }
                }
              },
              {
                weight: 0.2,
                speciality: {
                  connect: {
                    code: '09.03.02'
                  }
                }
              },
              {
                weight: 0.5,
                speciality: {
                  connect: {
                    code: '09.03.04'
                  }
                }
              },
              {
                weight: 0,
                speciality: {
                  connect: {
                    code: '27.03.04'
                  }
                }
              }
            ]
          }
        },
        {
          label: 'Составляю план и последовательность шагов для решения',
          values: {
            create: [
              {
                weight: 0,
                speciality: {
                  connect: {
                    code: '09.03.01'
                  }
                }
              },
              {
                weight: 0,
                speciality: {
                  connect: {
                    code: '09.03.02'
                  }
                }
              },
              {
                weight: 0.3,
                speciality: {
                  connect: {
                    code: '09.03.04'
                  }
                }
              },
              {
                weight: 0.7,
                speciality: {
                  connect: {
                    code: '27.03.04'
                  }
                }
              }
            ]
          }
        }
      ]
    }
  }
];

async function main() {
  console.log(`Start seeding ...`);
  for (const s of specialtyData) {
    const specialty = await prisma.specialty.create({
      data: s
    });
    console.log(`Created specialty: ${specialty.title}`);
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

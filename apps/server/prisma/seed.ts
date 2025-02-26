import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.direction.create({
    data: {
      avgScore: 220,
      code: '09.03.02',
      fullName: 'Информационные системы и технологии',
      level: 'Бакалавриат',
      minScore: 200,
      trials: ['Математика', 'Физика', 'Информатика'],

      forms: {
        createMany: {
          data: [
            {
              name: 'OCHNO',
              months: 36,
              budget: 40,
              payment: 10,
              target: 5,
              cost: 221000
            },
            {
              name: 'ZAOCHNO',
              months: 41,
              budget: 12,
              payment: 4,
              target: 0,
              cost: 217000
            }
          ]
        }
      },

      courses: {
        create: {
          number: 1,
          terms: {
            create: {
              number: 1,
              subjects: ['Информатика', 'Вычислительная математика']
            }
          }
        }
      },

      department: {
        create: {
          fullName: 'Информатика и вычислительная техника',
          institute: {
            create: {
              fullName: 'Политехнический институт'
            }
          }
        }
      }
    }
  });
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

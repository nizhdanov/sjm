import { prisma } from './prisma';

export const getAllSpecialties = async () => await prisma.specialty.findMany();

export const getSpecialtyByCode = async (code: string) =>
  await prisma.specialty.findUnique({
    where: {
      code
    }
  });

export const getDetailedSpecialtyByCode = async (code: string) =>
  await prisma.specialty.findUnique({
    where: {
      code
    },
    include: {
      courses: true,
      teachers: true
    }
  });

export type DetailedSpecialty = Awaited<ReturnType<typeof getDetailedSpecialtyByCode>>;

export const getProfTestResult = async () => {
  try {
    await prisma.specialty.findMany();
  } catch (error) {
    console.error(error);
  }
};

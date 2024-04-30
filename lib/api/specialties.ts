import { prisma } from './prisma';

export const getAllSpecialties = async () => await prisma.specialty.findMany();

export const getSpecialtyByCode = async (code: string) =>
  await prisma.specialty.findUnique({
    where: {
      code
    }
  });

export const getProfTestResult = async () => await prisma.specialty.findMany();

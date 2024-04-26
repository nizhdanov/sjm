import { prisma } from './prisma';

export const getAllSpecialties = async () => await prisma.specialty.findMany();

export const getProfTestResult = async () => await prisma.specialty.findMany();

import { prisma } from './prisma';

export const getAllSpecialtiesForCards = async () =>
  await prisma.specialty.findMany({
    select: {
      title: true,
      faculty: {
        select: {
          instituteTitle: true
        }
      },
      code: true,
      step: true,
      educationForms: {
        select: {
          minPoints: true
        }
      }
    }
  });

export const getSpecialtyByCode = async (code: string) =>
  await prisma.specialty.findUnique({
    where: {
      code
    }
  });

export const getSpecialtyTitleByCode = async (code: string) =>
  await prisma.specialty.findUnique({
    where: {
      code
    },
    select: {
      title: true
    }
  });

export const getDetailedSpecialtyByCode = async (code: string) =>
  await prisma.specialty.findUnique({
    where: {
      code
    },
    include: {
      courses: {
        include: {
          subjects: true
        }
      },
      faculty: {
        include: {
          teachers: {
            include: {
              skills: {
                select: {
                  skillName: true
                }
              },
              subjects: {
                select: {
                  subjectName: true
                }
              }
            }
          }
        }
      },
      scholarships: true,
      educationForms: true
    }
  });

export const getProfTestResult = async () => {
  try {
    await prisma.specialty.findMany();
  } catch (error) {
    console.error(error);
  }
};

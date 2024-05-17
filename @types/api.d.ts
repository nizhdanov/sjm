type QuestionWithOptions = import('@prisma/client').Question & {
  options: import('@prisma/client').Option[];
};

type CourseWithSubjects = import('@prisma/client').Course & {
  subjects: import('@prisma/client').SubjectsOfCourses[];
};

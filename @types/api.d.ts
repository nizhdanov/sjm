type QuestionWithOptions = import('@prisma/client').Question & {
  options: import('@prisma/client').Option[];
};

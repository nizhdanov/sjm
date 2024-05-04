-- CreateTable
CREATE TABLE "Institute" (
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Specialty" (
    "instituteTitle" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "step" TEXT NOT NULL,
    "points" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "descrition" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "specialtyCode" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SubjectsCourses" (
    "courseId" TEXT NOT NULL,
    "subjectName" TEXT NOT NULL,

    CONSTRAINT "SubjectsCourses_pkey" PRIMARY KEY ("courseId","subjectName")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "teacherId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeachersInSpecialties" (
    "teacherId" TEXT NOT NULL,
    "specialtyCode" TEXT NOT NULL,

    CONSTRAINT "TeachersInSpecialties_pkey" PRIMARY KEY ("teacherId","specialtyCode")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "midlleName" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeachersSkills" (
    "teacherId" TEXT NOT NULL,
    "skillName" TEXT NOT NULL,

    CONSTRAINT "TeachersSkills_pkey" PRIMARY KEY ("teacherId","skillName")
);

-- CreateTable
CREATE TABLE "TeachersSubjects" (
    "teacherId" TEXT NOT NULL,
    "subjectName" TEXT NOT NULL,

    CONSTRAINT "TeachersSubjects_pkey" PRIMARY KEY ("teacherId","subjectName")
);

-- CreateTable
CREATE TABLE "Skill" (
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Value" (
    "id" TEXT NOT NULL,
    "specialtyCode" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Value_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "body" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "questionOrder" INTEGER NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ValuesInOptions" (
    "valueId" TEXT NOT NULL,
    "optionId" TEXT NOT NULL,

    CONSTRAINT "ValuesInOptions_pkey" PRIMARY KEY ("valueId","optionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Institute_title_key" ON "Institute"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Specialty_code_key" ON "Specialty"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_name_key" ON "Subject"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_teacherId_key" ON "User"("teacherId");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Question_order_key" ON "Question"("order");

-- CreateIndex
CREATE UNIQUE INDEX "Question_body_key" ON "Question"("body");

-- AddForeignKey
ALTER TABLE "Specialty" ADD CONSTRAINT "Specialty_instituteTitle_fkey" FOREIGN KEY ("instituteTitle") REFERENCES "Institute"("title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_specialtyCode_fkey" FOREIGN KEY ("specialtyCode") REFERENCES "Specialty"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectsCourses" ADD CONSTRAINT "SubjectsCourses_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectsCourses" ADD CONSTRAINT "SubjectsCourses_subjectName_fkey" FOREIGN KEY ("subjectName") REFERENCES "Subject"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeachersInSpecialties" ADD CONSTRAINT "TeachersInSpecialties_specialtyCode_fkey" FOREIGN KEY ("specialtyCode") REFERENCES "Specialty"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeachersInSpecialties" ADD CONSTRAINT "TeachersInSpecialties_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeachersSkills" ADD CONSTRAINT "TeachersSkills_skillName_fkey" FOREIGN KEY ("skillName") REFERENCES "Skill"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeachersSkills" ADD CONSTRAINT "TeachersSkills_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeachersSubjects" ADD CONSTRAINT "TeachersSubjects_subjectName_fkey" FOREIGN KEY ("subjectName") REFERENCES "Subject"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeachersSubjects" ADD CONSTRAINT "TeachersSubjects_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Value" ADD CONSTRAINT "Value_specialtyCode_fkey" FOREIGN KEY ("specialtyCode") REFERENCES "Specialty"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_questionOrder_fkey" FOREIGN KEY ("questionOrder") REFERENCES "Question"("order") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValuesInOptions" ADD CONSTRAINT "ValuesInOptions_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValuesInOptions" ADD CONSTRAINT "ValuesInOptions_valueId_fkey" FOREIGN KEY ("valueId") REFERENCES "Value"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

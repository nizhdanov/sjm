-- CreateTable
CREATE TABLE "Institute" (
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Faculty" (
    "title" TEXT NOT NULL,
    "instituteTitle" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Specialty" (
    "facultyTitle" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "step" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Scholarship" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "from" INTEGER NOT NULL,
    "to" INTEGER NOT NULL,
    "specialtyCode" TEXT NOT NULL,

    CONSTRAINT "Scholarship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EducationForm" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "specialtyCode" TEXT NOT NULL,
    "budget" INTEGER,
    "commercial" INTEGER,
    "targeted" INTEGER,
    "cost" INTEGER,
    "time" TEXT NOT NULL,
    "avgPoints" DOUBLE PRECISION,
    "minPoints" INTEGER,

    CONSTRAINT "EducationForm_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "SubjectsOfCourses" (
    "courseId" TEXT NOT NULL,
    "subjectName" TEXT NOT NULL,

    CONSTRAINT "SubjectsOfCourses_pkey" PRIMARY KEY ("courseId","subjectName")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "midlleName" TEXT NOT NULL,
    "workStatus" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "facultyTitle" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillsOfTeachers" (
    "teacherId" TEXT NOT NULL,
    "skillName" TEXT NOT NULL,

    CONSTRAINT "SkillsOfTeachers_pkey" PRIMARY KEY ("teacherId","skillName")
);

-- CreateTable
CREATE TABLE "SubjectsOfTeachers" (
    "teacherId" TEXT NOT NULL,
    "subjectName" TEXT NOT NULL,

    CONSTRAINT "SubjectsOfTeachers_pkey" PRIMARY KEY ("teacherId","subjectName")
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
    "order" INTEGER NOT NULL,
    "body" TEXT NOT NULL
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
CREATE UNIQUE INDEX "Faculty_title_key" ON "Faculty"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Specialty_code_key" ON "Specialty"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_name_key" ON "Subject"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Question_order_key" ON "Question"("order");

-- CreateIndex
CREATE UNIQUE INDEX "Question_body_key" ON "Question"("body");

-- AddForeignKey
ALTER TABLE "Faculty" ADD CONSTRAINT "Faculty_instituteTitle_fkey" FOREIGN KEY ("instituteTitle") REFERENCES "Institute"("title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Specialty" ADD CONSTRAINT "Specialty_facultyTitle_fkey" FOREIGN KEY ("facultyTitle") REFERENCES "Faculty"("title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scholarship" ADD CONSTRAINT "Scholarship_specialtyCode_fkey" FOREIGN KEY ("specialtyCode") REFERENCES "Specialty"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EducationForm" ADD CONSTRAINT "EducationForm_specialtyCode_fkey" FOREIGN KEY ("specialtyCode") REFERENCES "Specialty"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_specialtyCode_fkey" FOREIGN KEY ("specialtyCode") REFERENCES "Specialty"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectsOfCourses" ADD CONSTRAINT "SubjectsOfCourses_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectsOfCourses" ADD CONSTRAINT "SubjectsOfCourses_subjectName_fkey" FOREIGN KEY ("subjectName") REFERENCES "Subject"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_facultyTitle_fkey" FOREIGN KEY ("facultyTitle") REFERENCES "Faculty"("title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsOfTeachers" ADD CONSTRAINT "SkillsOfTeachers_skillName_fkey" FOREIGN KEY ("skillName") REFERENCES "Skill"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillsOfTeachers" ADD CONSTRAINT "SkillsOfTeachers_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectsOfTeachers" ADD CONSTRAINT "SubjectsOfTeachers_subjectName_fkey" FOREIGN KEY ("subjectName") REFERENCES "Subject"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectsOfTeachers" ADD CONSTRAINT "SubjectsOfTeachers_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Value" ADD CONSTRAINT "Value_specialtyCode_fkey" FOREIGN KEY ("specialtyCode") REFERENCES "Specialty"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_questionOrder_fkey" FOREIGN KEY ("questionOrder") REFERENCES "Question"("order") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValuesInOptions" ADD CONSTRAINT "ValuesInOptions_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValuesInOptions" ADD CONSTRAINT "ValuesInOptions_valueId_fkey" FOREIGN KEY ("valueId") REFERENCES "Value"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

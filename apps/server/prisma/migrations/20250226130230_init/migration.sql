-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'STAFF', 'ADMIN');

-- CreateEnum
CREATE TYPE "FormName" AS ENUM ('OCHNO', 'ZAOCHNO', 'OCHNO_ZAOCHNO');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "passwordHash" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Institute" (
    "shortName" TEXT,
    "fullName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "patronymic" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "departmentFullName" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "shortName" TEXT,
    "fullName" TEXT NOT NULL,
    "instituteFullName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Direction" (
    "shortName" TEXT,
    "fullName" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "minScore" INTEGER NOT NULL,
    "avgScore" INTEGER NOT NULL,
    "trials" TEXT[],
    "departmentFullName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "directionCode" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Term" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "subjects" TEXT[],
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Term_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Form" (
    "id" SERIAL NOT NULL,
    "name" "FormName" NOT NULL,
    "months" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "budget" INTEGER NOT NULL,
    "target" INTEGER NOT NULL,
    "payment" INTEGER NOT NULL,
    "directionCode" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Institute_shortName_key" ON "Institute"("shortName");

-- CreateIndex
CREATE UNIQUE INDEX "Institute_fullName_key" ON "Institute"("fullName");

-- CreateIndex
CREATE UNIQUE INDEX "Department_shortName_key" ON "Department"("shortName");

-- CreateIndex
CREATE UNIQUE INDEX "Department_fullName_key" ON "Department"("fullName");

-- CreateIndex
CREATE UNIQUE INDEX "Direction_shortName_key" ON "Direction"("shortName");

-- CreateIndex
CREATE UNIQUE INDEX "Direction_fullName_key" ON "Direction"("fullName");

-- CreateIndex
CREATE UNIQUE INDEX "Direction_code_key" ON "Direction"("code");

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_departmentFullName_fkey" FOREIGN KEY ("departmentFullName") REFERENCES "Department"("fullName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_instituteFullName_fkey" FOREIGN KEY ("instituteFullName") REFERENCES "Institute"("fullName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Direction" ADD CONSTRAINT "Direction_departmentFullName_fkey" FOREIGN KEY ("departmentFullName") REFERENCES "Department"("fullName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_directionCode_fkey" FOREIGN KEY ("directionCode") REFERENCES "Direction"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Term" ADD CONSTRAINT "Term_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_directionCode_fkey" FOREIGN KEY ("directionCode") REFERENCES "Direction"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

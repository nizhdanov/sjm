/*
  Warnings:

  - You are about to drop the column `optionId` on the `Value` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Value" DROP CONSTRAINT "Value_optionId_fkey";

-- DropForeignKey
ALTER TABLE "Value" DROP CONSTRAINT "Value_specialtyId_fkey";

-- AlterTable
ALTER TABLE "Value" DROP COLUMN "optionId";

-- CreateTable
CREATE TABLE "ValuesInOptions" (
    "valueId" TEXT NOT NULL,
    "optionId" TEXT NOT NULL,

    CONSTRAINT "ValuesInOptions_pkey" PRIMARY KEY ("valueId","optionId")
);

-- AddForeignKey
ALTER TABLE "Value" ADD CONSTRAINT "Value_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "Specialty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValuesInOptions" ADD CONSTRAINT "ValuesInOptions_valueId_fkey" FOREIGN KEY ("valueId") REFERENCES "Value"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValuesInOptions" ADD CONSTRAINT "ValuesInOptions_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `specialtyId` on the `Value` table. All the data in the column will be lost.
  - Added the required column `specialtyCode` to the `Value` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Value" DROP CONSTRAINT "Value_specialtyId_fkey";

-- AlterTable
ALTER TABLE "Value" DROP COLUMN "specialtyId",
ADD COLUMN     "specialtyCode" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Value" ADD CONSTRAINT "Value_specialtyCode_fkey" FOREIGN KEY ("specialtyCode") REFERENCES "Specialty"("code") ON DELETE CASCADE ON UPDATE CASCADE;

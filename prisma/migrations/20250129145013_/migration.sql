/*
  Warnings:

  - You are about to drop the column `timeMinutes` on the `Service` table. All the data in the column will be lost.
  - Added the required column `time` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "timeMinutes",
ADD COLUMN     "time" INTEGER NOT NULL;

/*
  Warnings:

  - Made the column `trainingExp` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "trainingExp" SET NOT NULL;

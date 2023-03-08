/*
  Warnings:

  - You are about to drop the column `creator` on the `Project` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_creator_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "creator";

/*
  Warnings:

  - The primary key for the `Position_Submission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Position_Submission` table. All the data in the column will be lost.
  - The primary key for the `Profile_Manager` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Profile_Manager` table. All the data in the column will be lost.
  - The primary key for the `Project_Position` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Project_Position` table. All the data in the column will be lost.
  - The primary key for the `Project_Profile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Project_Profile` table. All the data in the column will be lost.
  - The primary key for the `Project_Team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Project_Team` table. All the data in the column will be lost.
  - The primary key for the `Project_Technology` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Project_Technology` table. All the data in the column will be lost.
  - The primary key for the `Project_skill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Project_skill` table. All the data in the column will be lost.
  - The primary key for the `Technology_Profile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Technology_Profile` table. All the data in the column will be lost.
  - Made the column `id_position` on table `Position_Submission` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_submission` on table `Position_Submission` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `manager_email` to the `Profile_Manager` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Profile_Manager` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `creator` on the `Project` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `id_project` on table `Project_Position` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_position` on table `Project_Position` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_project` on table `Project_Profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_profile` on table `Project_Profile` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `email` on the `Project_Team` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `id_project` on table `Project_Technology` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_technology` on table `Project_Technology` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_project` on table `Project_skill` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_skill` on table `Project_skill` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `email` to the `Skill_Profile` table without a default value. This is not possible if the table is not empty.
  - Made the column `id_profile` on table `Technology_Profile` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Position_Submission" DROP CONSTRAINT "Position_Submission_id_position_fkey";

-- DropForeignKey
ALTER TABLE "Position_Submission" DROP CONSTRAINT "Position_Submission_id_submission_fkey";

-- DropForeignKey
ALTER TABLE "Profile_Manager" DROP CONSTRAINT "Profile_Manager_email_fkey";

-- DropForeignKey
ALTER TABLE "Profile_Manager" DROP CONSTRAINT "Profile_Manager_manager_email_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_creator_fkey";

-- DropForeignKey
ALTER TABLE "Project_Position" DROP CONSTRAINT "Project_Position_id_position_fkey";

-- DropForeignKey
ALTER TABLE "Project_Position" DROP CONSTRAINT "Project_Position_id_project_fkey";

-- DropForeignKey
ALTER TABLE "Project_Profile" DROP CONSTRAINT "Project_Profile_id_profile_fkey";

-- DropForeignKey
ALTER TABLE "Project_Profile" DROP CONSTRAINT "Project_Profile_id_project_fkey";

-- DropForeignKey
ALTER TABLE "Project_Team" DROP CONSTRAINT "Project_Team_email_fkey";

-- DropForeignKey
ALTER TABLE "Project_Technology" DROP CONSTRAINT "Project_Technology_id_project_fkey";

-- DropForeignKey
ALTER TABLE "Project_Technology" DROP CONSTRAINT "Project_Technology_id_technology_fkey";

-- DropForeignKey
ALTER TABLE "Project_skill" DROP CONSTRAINT "Project_skill_id_project_fkey";

-- DropForeignKey
ALTER TABLE "Project_skill" DROP CONSTRAINT "Project_skill_id_skill_fkey";

-- DropForeignKey
ALTER TABLE "Skill_Profile" DROP CONSTRAINT "Skill_Profile_email_fkey";

-- DropForeignKey
ALTER TABLE "Technology_Profile" DROP CONSTRAINT "Technology_Profile_id_profile_fkey";

-- DropIndex
DROP INDEX "Project_Team_email_key";

-- AlterTable
ALTER TABLE "Position_Submission" DROP CONSTRAINT "Position_Submission_pkey",
DROP COLUMN "id",
ALTER COLUMN "id_position" SET NOT NULL,
ALTER COLUMN "id_submission" SET NOT NULL,
ADD CONSTRAINT "Position_Submission_pkey" PRIMARY KEY ("id_position", "id_submission");

-- AlterTable
ALTER TABLE "Profile_Manager" DROP CONSTRAINT "Profile_Manager_pkey",
DROP COLUMN "id",
DROP COLUMN "manager_email",
ADD COLUMN     "manager_email" INTEGER NOT NULL,
DROP COLUMN "email",
ADD COLUMN     "email" INTEGER NOT NULL,
ADD CONSTRAINT "Profile_Manager_pkey" PRIMARY KEY ("manager_email", "email");

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "creator",
ADD COLUMN     "creator" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Project_Position" DROP CONSTRAINT "Project_Position_pkey",
DROP COLUMN "id",
ALTER COLUMN "id_project" SET NOT NULL,
ALTER COLUMN "id_position" SET NOT NULL,
ADD CONSTRAINT "Project_Position_pkey" PRIMARY KEY ("id_project", "id_position");

-- AlterTable
ALTER TABLE "Project_Profile" DROP CONSTRAINT "Project_Profile_pkey",
DROP COLUMN "id",
ALTER COLUMN "id_project" SET NOT NULL,
ALTER COLUMN "id_profile" SET NOT NULL,
ADD CONSTRAINT "Project_Profile_pkey" PRIMARY KEY ("id_project", "id_profile");

-- AlterTable
ALTER TABLE "Project_Team" DROP CONSTRAINT "Project_Team_pkey",
DROP COLUMN "id",
DROP COLUMN "email",
ADD COLUMN     "email" INTEGER NOT NULL,
ADD CONSTRAINT "Project_Team_pkey" PRIMARY KEY ("id_project", "email");

-- AlterTable
ALTER TABLE "Project_Technology" DROP CONSTRAINT "Project_Technology_pkey",
DROP COLUMN "id",
ALTER COLUMN "id_project" SET NOT NULL,
ALTER COLUMN "id_technology" SET NOT NULL,
ADD CONSTRAINT "Project_Technology_pkey" PRIMARY KEY ("id_project", "id_technology");

-- AlterTable
ALTER TABLE "Project_skill" DROP CONSTRAINT "Project_skill_pkey",
DROP COLUMN "id",
ALTER COLUMN "id_project" SET NOT NULL,
ALTER COLUMN "id_skill" SET NOT NULL,
ADD CONSTRAINT "Project_skill_pkey" PRIMARY KEY ("id_project", "id_skill");

-- AlterTable
ALTER TABLE "Skill_Profile" DROP COLUMN "email",
ADD COLUMN     "email" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Technology_Profile" DROP CONSTRAINT "Technology_Profile_pkey",
DROP COLUMN "id",
ALTER COLUMN "id_profile" SET NOT NULL,
ADD CONSTRAINT "Technology_Profile_pkey" PRIMARY KEY ("id_technology", "id_profile");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_creator_fkey" FOREIGN KEY ("creator") REFERENCES "Profile"("id_profile") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill_Profile" ADD CONSTRAINT "Skill_Profile_email_fkey" FOREIGN KEY ("email") REFERENCES "Profile"("id_profile") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_skill" ADD CONSTRAINT "Project_skill_id_project_fkey" FOREIGN KEY ("id_project") REFERENCES "Project"("idProject") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_skill" ADD CONSTRAINT "Project_skill_id_skill_fkey" FOREIGN KEY ("id_skill") REFERENCES "Skill"("id_skill") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Profile" ADD CONSTRAINT "Project_Profile_id_project_fkey" FOREIGN KEY ("id_project") REFERENCES "Project"("idProject") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Profile" ADD CONSTRAINT "Project_Profile_id_profile_fkey" FOREIGN KEY ("id_profile") REFERENCES "Profile"("id_profile") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile_Manager" ADD CONSTRAINT "Profile_Manager_manager_email_fkey" FOREIGN KEY ("manager_email") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile_Manager" ADD CONSTRAINT "Profile_Manager_email_fkey" FOREIGN KEY ("email") REFERENCES "Profile"("id_profile") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position_Submission" ADD CONSTRAINT "Position_Submission_id_position_fkey" FOREIGN KEY ("id_position") REFERENCES "Position"("id_position") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position_Submission" ADD CONSTRAINT "Position_Submission_id_submission_fkey" FOREIGN KEY ("id_submission") REFERENCES "Submission"("id_submission") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Position" ADD CONSTRAINT "Project_Position_id_project_fkey" FOREIGN KEY ("id_project") REFERENCES "Project"("idProject") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Position" ADD CONSTRAINT "Project_Position_id_position_fkey" FOREIGN KEY ("id_position") REFERENCES "Position"("id_position") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Technology" ADD CONSTRAINT "Project_Technology_id_project_fkey" FOREIGN KEY ("id_project") REFERENCES "Project"("idProject") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Technology" ADD CONSTRAINT "Project_Technology_id_technology_fkey" FOREIGN KEY ("id_technology") REFERENCES "Technology"("id_technology") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Team" ADD CONSTRAINT "Project_Team_email_fkey" FOREIGN KEY ("email") REFERENCES "Profile"("id_profile") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Technology_Profile" ADD CONSTRAINT "Technology_Profile_id_profile_fkey" FOREIGN KEY ("id_profile") REFERENCES "Profile"("id_profile") ON DELETE RESTRICT ON UPDATE CASCADE;

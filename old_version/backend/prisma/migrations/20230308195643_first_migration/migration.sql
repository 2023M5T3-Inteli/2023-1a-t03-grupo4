-- CreateTable
CREATE TABLE "Project" (
    "idProject" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "stt" TEXT,
    "submission_date" TIMESTAMP(3),
    "period" TIMESTAMP(3),
    "creator" TEXT NOT NULL,
    "specification" TEXT,
    "area" TEXT,
    "role" TEXT,
    "auth" BOOLEAN,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("idProject")
);

-- CreateTable
CREATE TABLE "Submission" (
    "id_submission" SERIAL NOT NULL,
    "name" TEXT,
    "id_project" INTEGER,
    "reason" TEXT,
    "email" TEXT,
    "status" TEXT,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id_submission")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id_profile" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id_profile")
);

-- CreateTable
CREATE TABLE "Skill_Profile" (
    "id" SERIAL NOT NULL,
    "id_skill" INTEGER,
    "email" TEXT,

    CONSTRAINT "Skill_Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id_skill" SERIAL NOT NULL,
    "skill" TEXT,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id_skill")
);

-- CreateTable
CREATE TABLE "Project_skill" (
    "id" SERIAL NOT NULL,
    "id_project" INTEGER,
    "id_skill" INTEGER,

    CONSTRAINT "Project_skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project_Profile" (
    "id" SERIAL NOT NULL,
    "id_project" INTEGER,
    "id_profile" INTEGER,

    CONSTRAINT "Project_Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile_Manager" (
    "id" SERIAL NOT NULL,
    "manager_email" TEXT,
    "email" TEXT,

    CONSTRAINT "Profile_Manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manager" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "area" TEXT NOT NULL,

    CONSTRAINT "Manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position_Submission" (
    "id" SERIAL NOT NULL,
    "id_position" INTEGER,
    "id_submission" INTEGER,

    CONSTRAINT "Position_Submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project_Position" (
    "id" SERIAL NOT NULL,
    "id_project" INTEGER,
    "id_position" INTEGER,

    CONSTRAINT "Project_Position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project_Technology" (
    "id" SERIAL NOT NULL,
    "id_project" INTEGER,
    "id_technology" INTEGER,

    CONSTRAINT "Project_Technology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project_Team" (
    "id" SERIAL NOT NULL,
    "id_project" INTEGER NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Project_Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technology_Profile" (
    "id" SERIAL NOT NULL,
    "id_technology" INTEGER NOT NULL,
    "id_profile" INTEGER,

    CONSTRAINT "Technology_Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technology" (
    "id_technology" SERIAL NOT NULL,
    "Technology" TEXT,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id_technology")
);

-- CreateTable
CREATE TABLE "Position" (
    "id_position" SERIAL NOT NULL,
    "position" TEXT,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id_position")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_title_key" ON "Project"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Manager_email_key" ON "Manager"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Project_Team_email_key" ON "Project_Team"("email");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_creator_fkey" FOREIGN KEY ("creator") REFERENCES "Profile"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_id_project_fkey" FOREIGN KEY ("id_project") REFERENCES "Project"("idProject") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_email_fkey" FOREIGN KEY ("email") REFERENCES "Profile"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill_Profile" ADD CONSTRAINT "Skill_Profile_id_skill_fkey" FOREIGN KEY ("id_skill") REFERENCES "Skill"("id_skill") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill_Profile" ADD CONSTRAINT "Skill_Profile_email_fkey" FOREIGN KEY ("email") REFERENCES "Profile"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_skill" ADD CONSTRAINT "Project_skill_id_project_fkey" FOREIGN KEY ("id_project") REFERENCES "Project"("idProject") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_skill" ADD CONSTRAINT "Project_skill_id_skill_fkey" FOREIGN KEY ("id_skill") REFERENCES "Skill"("id_skill") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Profile" ADD CONSTRAINT "Project_Profile_id_project_fkey" FOREIGN KEY ("id_project") REFERENCES "Project"("idProject") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Profile" ADD CONSTRAINT "Project_Profile_id_profile_fkey" FOREIGN KEY ("id_profile") REFERENCES "Profile"("id_profile") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile_Manager" ADD CONSTRAINT "Profile_Manager_manager_email_fkey" FOREIGN KEY ("manager_email") REFERENCES "Manager"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile_Manager" ADD CONSTRAINT "Profile_Manager_email_fkey" FOREIGN KEY ("email") REFERENCES "Profile"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position_Submission" ADD CONSTRAINT "Position_Submission_id_position_fkey" FOREIGN KEY ("id_position") REFERENCES "Position"("id_position") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position_Submission" ADD CONSTRAINT "Position_Submission_id_submission_fkey" FOREIGN KEY ("id_submission") REFERENCES "Submission"("id_submission") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Position" ADD CONSTRAINT "Project_Position_id_project_fkey" FOREIGN KEY ("id_project") REFERENCES "Project"("idProject") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Position" ADD CONSTRAINT "Project_Position_id_position_fkey" FOREIGN KEY ("id_position") REFERENCES "Position"("id_position") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Technology" ADD CONSTRAINT "Project_Technology_id_project_fkey" FOREIGN KEY ("id_project") REFERENCES "Project"("idProject") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Technology" ADD CONSTRAINT "Project_Technology_id_technology_fkey" FOREIGN KEY ("id_technology") REFERENCES "Technology"("id_technology") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Team" ADD CONSTRAINT "Project_Team_id_project_fkey" FOREIGN KEY ("id_project") REFERENCES "Project"("idProject") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Team" ADD CONSTRAINT "Project_Team_email_fkey" FOREIGN KEY ("email") REFERENCES "Profile"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Technology_Profile" ADD CONSTRAINT "Technology_Profile_id_technology_fkey" FOREIGN KEY ("id_technology") REFERENCES "Technology"("id_technology") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Technology_Profile" ADD CONSTRAINT "Technology_Profile_id_profile_fkey" FOREIGN KEY ("id_profile") REFERENCES "Profile"("id_profile") ON DELETE SET NULL ON UPDATE CASCADE;

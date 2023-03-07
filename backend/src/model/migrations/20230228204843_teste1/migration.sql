-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_creator_fkey" FOREIGN KEY ("creator") REFERENCES "Profile"("email") ON DELETE SET NULL ON UPDATE CASCADE;

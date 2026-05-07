-- AlterTable
ALTER TABLE "Scheme" ADD COLUMN     "benefits_ta" TEXT,
ADD COLUMN     "category_ta" TEXT,
ADD COLUMN     "department_ta" TEXT,
ADD COLUMN     "description_ta" TEXT,
ADD COLUMN     "eligibility_ta" TEXT,
ADD COLUMN     "title_ta" TEXT;

-- CreateTable
CREATE TABLE "Application" (
    "application_id" TEXT NOT NULL,
    "reference_no" TEXT NOT NULL,
    "service_type" TEXT NOT NULL,
    "service_name" TEXT NOT NULL,
    "applicant_name" TEXT NOT NULL,
    "mobile" TEXT,
    "email" TEXT,
    "location" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Submitted',
    "remarks" TEXT,
    "details" JSONB,
    "citizen_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("application_id")
);

-- CreateTable
CREATE TABLE "ContactMessage" (
    "message_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Unread',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("message_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Application_reference_no_key" ON "Application"("reference_no");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_citizen_id_fkey" FOREIGN KEY ("citizen_id") REFERENCES "UserRegistration"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

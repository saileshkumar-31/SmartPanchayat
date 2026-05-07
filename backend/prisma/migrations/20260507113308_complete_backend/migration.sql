-- AlterTable
ALTER TABLE "UserRegistration" ADD COLUMN     "user_address" TEXT,
ADD COLUMN     "user_notes" TEXT,
ADD COLUMN     "user_status" TEXT NOT NULL DEFAULT 'Active';

-- CreateTable
CREATE TABLE "Complaint" (
    "complaint_id" TEXT NOT NULL,
    "reference_no" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "priority" TEXT NOT NULL DEFAULT 'Medium',
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "details" JSONB,
    "citizen_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Complaint_pkey" PRIMARY KEY ("complaint_id")
);

-- CreateTable
CREATE TABLE "Meeting" (
    "meeting_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT,
    "venue" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'Gram Sabha',
    "agenda" TEXT,
    "minutes" TEXT,
    "attendees" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'Upcoming',
    "is_public" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meeting_pkey" PRIMARY KEY ("meeting_id")
);

-- CreateTable
CREATE TABLE "MeetingRequest" (
    "request_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "preferred_date" TIMESTAMP(3),
    "location" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "citizen_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MeetingRequest_pkey" PRIMARY KEY ("request_id")
);

-- CreateTable
CREATE TABLE "Scheme" (
    "scheme_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "eligibility" TEXT,
    "benefits" TEXT,
    "department" TEXT,
    "amount" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Scheme_pkey" PRIMARY KEY ("scheme_id")
);

-- CreateTable
CREATE TABLE "TransparencyProject" (
    "project_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'Ongoing',
    "budget" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "spent" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "progress" INTEGER NOT NULL DEFAULT 0,
    "contractor" TEXT,
    "location" TEXT,
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'Ongoing',
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransparencyProject_pkey" PRIMARY KEY ("project_id")
);

-- CreateTable
CREATE TABLE "TransparencyExpense" (
    "expense_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "paid_to" TEXT,
    "expense_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'Published',
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransparencyExpense_pkey" PRIMARY KEY ("expense_id")
);

-- CreateTable
CREATE TABLE "TransparencyTender" (
    "tender_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "department" TEXT,
    "budget" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "deadline" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'Open',
    "contractor" TEXT,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransparencyTender_pkey" PRIMARY KEY ("tender_id")
);

-- CreateTable
CREATE TABLE "TransparencyBudget" (
    "budget_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "allocated" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "spent" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "year" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransparencyBudget_pkey" PRIMARY KEY ("budget_id")
);

-- CreateTable
CREATE TABLE "TransparencyUpdate" (
    "update_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "details" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Published',
    "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransparencyUpdate_pkey" PRIMARY KEY ("update_id")
);

-- CreateTable
CREATE TABLE "TransparencyReport" (
    "report_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "period" TEXT,
    "file_url" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Published',
    "summary" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransparencyReport_pkey" PRIMARY KEY ("report_id")
);

-- CreateTable
CREATE TABLE "SiteSettings" (
    "settings_id" TEXT NOT NULL DEFAULT 'default',
    "notifications" BOOLEAN NOT NULL DEFAULT true,
    "maintenanceMode" BOOLEAN NOT NULL DEFAULT false,
    "publicTransparency" BOOLEAN NOT NULL DEFAULT true,
    "tamilLanguage" BOOLEAN NOT NULL DEFAULT true,
    "citizenRegistration" BOOLEAN NOT NULL DEFAULT true,
    "autoApproval" BOOLEAN NOT NULL DEFAULT false,
    "restrictionMessage" TEXT NOT NULL DEFAULT 'Smart Panchayat is temporarily restricted by the administrator.',
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SiteSettings_pkey" PRIMARY KEY ("settings_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Complaint_reference_no_key" ON "Complaint"("reference_no");

-- CreateIndex
CREATE UNIQUE INDEX "Scheme_slug_key" ON "Scheme"("slug");

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_citizen_id_fkey" FOREIGN KEY ("citizen_id") REFERENCES "UserRegistration"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetingRequest" ADD CONSTRAINT "MeetingRequest_citizen_id_fkey" FOREIGN KEY ("citizen_id") REFERENCES "UserRegistration"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

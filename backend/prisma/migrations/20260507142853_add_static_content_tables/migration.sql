-- CreateTable
CREATE TABLE "CertificateRequirement" (
    "requirement_id" TEXT NOT NULL,
    "certificate_id" TEXT NOT NULL,
    "document_type" TEXT NOT NULL,
    "is_required" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CertificateRequirement_pkey" PRIMARY KEY ("requirement_id")
);

-- CreateTable
CREATE TABLE "CertificateEligibility" (
    "eligibility_id" TEXT NOT NULL,
    "certificate_id" TEXT NOT NULL,
    "requirement" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CertificateEligibility_pkey" PRIMARY KEY ("eligibility_id")
);

-- CreateTable
CREATE TABLE "MeetingTab" (
    "tab_id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "label_en" TEXT NOT NULL,
    "label_ta" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MeetingTab_pkey" PRIMARY KEY ("tab_id")
);

-- CreateTable
CREATE TABLE "QuickAction" (
    "action_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuickAction_pkey" PRIMARY KEY ("action_id")
);

-- CreateTable
CREATE TABLE "ServiceCategory" (
    "category_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceCategory_pkey" PRIMARY KEY ("category_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MeetingTab_key_key" ON "MeetingTab"("key");

-- AddForeignKey
ALTER TABLE "CertificateRequirement" ADD CONSTRAINT "CertificateRequirement_certificate_id_fkey" FOREIGN KEY ("certificate_id") REFERENCES "Certificate"("certificate_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CertificateEligibility" ADD CONSTRAINT "CertificateEligibility_certificate_id_fkey" FOREIGN KEY ("certificate_id") REFERENCES "Certificate"("certificate_id") ON DELETE CASCADE ON UPDATE CASCADE;

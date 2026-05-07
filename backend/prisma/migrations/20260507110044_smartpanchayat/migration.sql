-- CreateTable
CREATE TABLE "UserRegistration" (
    "user_id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_mobile" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_pass" TEXT NOT NULL,
    "user_panchayat" TEXT NOT NULL,
    "user_role" TEXT NOT NULL DEFAULT 'citizen',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserRegistration_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRegistration_user_mobile_key" ON "UserRegistration"("user_mobile");

-- CreateIndex
CREATE UNIQUE INDEX "UserRegistration_user_email_key" ON "UserRegistration"("user_email");

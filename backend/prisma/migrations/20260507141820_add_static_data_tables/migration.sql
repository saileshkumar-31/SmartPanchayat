-- CreateTable
CREATE TABLE "CivilService" (
    "service_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "process_time" TEXT,
    "fee" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "required_docs" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CivilService_pkey" PRIMARY KEY ("service_id")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "certificate_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "process_time" TEXT,
    "fee" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "required_docs" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("certificate_id")
);

-- CreateTable
CREATE TABLE "PanchayatStats" (
    "stats_id" TEXT NOT NULL,
    "metric" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PanchayatStats_pkey" PRIMARY KEY ("stats_id")
);

-- CreateTable
CREATE TABLE "PanchayatValue" (
    "value_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PanchayatValue_pkey" PRIMARY KEY ("value_id")
);

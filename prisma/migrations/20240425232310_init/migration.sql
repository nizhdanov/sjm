-- CreateTable
CREATE TABLE "Specialty" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Specialty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Value" (
    "id" TEXT NOT NULL,
    "specialtyId" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Value_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "body" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "questionOrder" INTEGER NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ValuesInOptions" (
    "valueId" TEXT NOT NULL,
    "optionId" TEXT NOT NULL,

    CONSTRAINT "ValuesInOptions_pkey" PRIMARY KEY ("valueId","optionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Specialty_code_key" ON "Specialty"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Question_order_key" ON "Question"("order");

-- CreateIndex
CREATE UNIQUE INDEX "Question_body_key" ON "Question"("body");

-- AddForeignKey
ALTER TABLE "Value" ADD CONSTRAINT "Value_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "Specialty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_questionOrder_fkey" FOREIGN KEY ("questionOrder") REFERENCES "Question"("order") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValuesInOptions" ADD CONSTRAINT "ValuesInOptions_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValuesInOptions" ADD CONSTRAINT "ValuesInOptions_valueId_fkey" FOREIGN KEY ("valueId") REFERENCES "Value"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

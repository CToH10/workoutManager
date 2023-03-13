-- CreateEnum
CREATE TYPE "TrainingExp" AS ENUM ('beg', 'int', 'adv', 'pro');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "trainingExp" "TrainingExp" NOT NULL DEFAULT 'beg',
    "password" VARCHAR(120) NOT NULL,
    "admin" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "muscle_group" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "muscle_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exercise" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(55) NOT NULL,
    "description" TEXT,
    "muscleId" INTEGER NOT NULL,

    CONSTRAINT "exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_workout" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "daily_workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_exercise" (
    "id" SERIAL NOT NULL,
    "exerciseId" INTEGER NOT NULL,
    "dailyWorkoutId" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "series" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,
    "totalLoad" INTEGER NOT NULL,

    CONSTRAINT "daily_exercise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "muscle_group_name_key" ON "muscle_group"("name");

-- CreateIndex
CREATE UNIQUE INDEX "exercise_name_key" ON "exercise"("name");

-- AddForeignKey
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_muscleId_fkey" FOREIGN KEY ("muscleId") REFERENCES "muscle_group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_workout" ADD CONSTRAINT "daily_workout_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_exercise" ADD CONSTRAINT "daily_exercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_exercise" ADD CONSTRAINT "daily_exercise_dailyWorkoutId_fkey" FOREIGN KEY ("dailyWorkoutId") REFERENCES "daily_workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

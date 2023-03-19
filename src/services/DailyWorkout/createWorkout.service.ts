import { prisma } from "../../app";
import { iDailyWorkoutReturn } from "../../interfaces";
import { dailyWorkoutReturnSchema } from "../../schemas";

export const createWorkoutService = async (
  userId: number
): Promise<iDailyWorkoutReturn> => {
  const workout = await prisma.daily_workout.create({
    data: { userId: userId },
    include: {
      daily_exercise: { include: { exercise: { select: { name: true } } } },
      user: { select: { name: true } },
    },
  });

  const validatedWorkout = dailyWorkoutReturnSchema.parse(workout);

  return validatedWorkout;
};

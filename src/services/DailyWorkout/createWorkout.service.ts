import { prisma } from "../../app";
import { iDailyWorkoutRequest, iDailyWorkoutReturn } from "../../interfaces";
import { dailyWorkoutReturnSchema } from "../../schemas";

export const createWorkoutService = async (
  data: iDailyWorkoutRequest
): Promise<iDailyWorkoutReturn> => {
  const workout = await prisma.daily_workout.create({
    data: data,
  });

  const validatedWorkout = dailyWorkoutReturnSchema.parse(workout);

  return validatedWorkout;
};

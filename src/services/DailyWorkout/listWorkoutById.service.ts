import { prisma } from "../../app";
import { iDailyWorkoutReturn } from "../../interfaces";
import { dailyExerciseReturnSchema } from "../../schemas";

export const listWorkoutByIdService = async (
  id: number
): Promise<iDailyWorkoutReturn> => {
  const workout = await prisma.daily_workout.findUnique({
    where: { id },
    include: {
      daily_exercise: { include: { exercise: { select: { name: true } } } },
      user: { select: { name: true } },
    },
  });

  const validatedWorkout = dailyExerciseReturnSchema.parse(workout);

  return validatedWorkout;
};

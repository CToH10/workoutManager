import { prisma } from "../../app";
import { iDailyWorkoutReturn } from "../../interfaces";
import { dailyExerciseReturnSchema } from "../../schemas";

export const updateDailyWorkoutService = async (
  data: { date: string },
  workoutId: number
): Promise<iDailyWorkoutReturn> => {
  const dateTimeString = new Date(data.date+"z03:00");

  await prisma.daily_workout.update({
    where: { id: workoutId },
    data: { date: dateTimeString },
  });

  const updatedDailyWorkout = await prisma.daily_workout.findUnique({
    where: { id: workoutId },
    include: {
      daily_exercise: { include: { exercise: { select: { name: true } } } },
      user: { select: { name: true } },
    },
  });

  const validatedWorkout = dailyExerciseReturnSchema.parse(updatedDailyWorkout);

  return validatedWorkout;
};

import { prisma } from "../../app";
import { iDailyExerciseRequest, iDailyExerciseReturn } from "../../interfaces";
import { dailyExerciseReturnSchema } from "../../schemas";

export const createDailyExerciseService = async (
  data: iDailyExerciseRequest,
  id: number
): Promise<iDailyExerciseReturn> => {
  const sendData = {
    ...data,
    dailyWorkoutId: id,
    totalLoad: data.reps * data.series * data.weight,
  };

  await prisma.daily_exercise.create({ data: sendData });

  const returnWorkout = await prisma.daily_workout.findUnique({
    where: { id },
    include: {
      daily_exercise: { include: { exercise: { select: { name: true } } } },
      user: { select: { name: true } },
    },
  });

  const validatedList = dailyExerciseReturnSchema.parse(returnWorkout);

  return validatedList;
};

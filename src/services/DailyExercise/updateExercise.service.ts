import { prisma } from "../../app";
import { iDailyExerciseUpdate } from "../../interfaces";
import { dailyExerciseReturnSchema } from "../../schemas";

export const updateDailyExerciseService = async (
  data: iDailyExerciseUpdate,
  dailyExerciseId: number,
  workoutId: number
) => {
  const findExercise = await prisma.daily_exercise.findUnique({
    where: { id: dailyExerciseId },
  });

  const { exerciseId, weight, series, reps } = findExercise!;

  const newData = {
    exerciseId: data.exerciseId || exerciseId,
    weight: data.weight || weight,
    series: data.series || series,
    reps: data.reps || reps,
    // totalLoad: (function () {
    //   return this.weight * this.series * this.reps;
    // })(),
    totalLoad:
      (data.weight || weight) * (data.series || series) * (data.reps || reps),
  };

  const dailyUpdated = await prisma.daily_exercise.update({
    where: { id: dailyExerciseId },
    data: newData,
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

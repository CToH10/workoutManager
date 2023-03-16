import { prisma } from "../../app";

export const deleteExerciseWorkoutService = async (
  id: number
): Promise<void> => {
  await prisma.daily_exercise.delete({ where: { id } });
};

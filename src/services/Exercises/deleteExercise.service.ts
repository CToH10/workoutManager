import { prisma } from "../../app";

export const deleteExerciseService = async (id: number): Promise<void> => {
  await prisma.exercise.delete({ where: { id } });
};

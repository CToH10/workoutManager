import { prisma } from "../../app";
import { iExerciseByGroup } from "../../interfaces";
import { exerciseByGroupListSchema } from "../../schemas";

export const listExerciseByGroupService = async (
  id: number
): Promise<iExerciseByGroup> => {
  const exerciseList = await prisma.exercise.findMany({
    where: { muscleId: id },
  });

  const validatedList = exerciseByGroupListSchema.parse(exerciseList);

  return validatedList;
};

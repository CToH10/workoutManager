import { prisma } from "../../app";
import { iExerciseList } from "../../interfaces";
import { exerciseListSchema } from "../../schemas";

export const listAllExercisesService = async (): Promise<iExerciseList> => {
  const exerciseList = await prisma.exercise.findMany({
    include: { muscle: true },
  });

  const validatedList = exerciseListSchema.parse(exerciseList);

  return validatedList;
};

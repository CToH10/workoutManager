import { prisma } from "../../app";
import { iExerciseList } from "../../interfaces";

export const listAllExercisesService = async (): Promise<iExerciseList> => {
  const exerciseList = prisma.exercise.findMany({
    include: { muscle: true },
  });

  return exerciseList;
};

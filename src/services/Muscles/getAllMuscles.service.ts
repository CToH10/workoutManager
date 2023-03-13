import { prisma } from "../../app";
import { iMuscleList } from "../../interfaces";

export const getAllMusclesService = async (): Promise<iMuscleList> => {
  const muscleList = prisma.muscle_group.findMany({
    include: { exercises: true },
  });

  return muscleList;
};

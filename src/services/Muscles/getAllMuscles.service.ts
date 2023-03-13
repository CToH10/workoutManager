import { prisma } from "../../app";
import { iMuscleList } from "../../interfaces";
import { muscleListSchema } from "../../schemas";

export const getAllMusclesService = async (): Promise<iMuscleList> => {
  const muscleList = await prisma.muscle_group.findMany({
    include: { exercises: true },
  });

  const validatedMuscleList = muscleListSchema.parse(muscleList);

  return validatedMuscleList;
};

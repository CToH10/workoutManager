import { prisma } from "../../app";
import { iMuscleRequest, iMuscleReturn } from "../../interfaces";
import { muscleReturnSchema } from "../../schemas";

export const createMuscleService = async (
  data: iMuscleRequest
): Promise<iMuscleReturn> => {
  const muscleGroup = await prisma.muscle_group.create({ data: data });

  const validatedMuscle = muscleReturnSchema.parse(muscleGroup);

  return validatedMuscle;
};

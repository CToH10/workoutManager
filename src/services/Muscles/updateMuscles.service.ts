import { prisma } from "../../app";
import { iMuscleRequest, iMuscleReturn } from "../../interfaces";
import { muscleReturnSchema } from "../../schemas";

export const updateMuscleService = async (
  data: iMuscleRequest,
  id: number
): Promise<iMuscleReturn> => {
  const muscleGroup = await prisma.muscle_group.update({
    where: { id },
    data: data,
    include: { exercises: true },
  });

  const validatedMuscle = muscleReturnSchema.parse(muscleGroup);

  return validatedMuscle;
};

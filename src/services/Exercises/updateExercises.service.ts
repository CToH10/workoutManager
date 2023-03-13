import { prisma } from "../../app";
import {
  iExerciseRequest,
  iExerciseReturn,
  iExerciseUpdate,
} from "../../interfaces";
import { exerciseReturnSchema } from "../../schemas";

export const updateExerciseService = async (
  data: iExerciseUpdate,
  exerciseId: number
): Promise<iExerciseReturn> => {
  const findExercise = await prisma.exercise.findFirst({
    where: { id: exerciseId },
  });
  const { id, muscleId, description, name } = findExercise!;
  const sendData: iExerciseRequest = {
    name: data.name || name,
    description: data.description || description,
    muscleId: data.muscleId || muscleId,
  };

  const exerciseUpdated = await prisma.exercise.update({
    where: { id: exerciseId },
    data: {
      name: sendData.name,
      description: sendData.description || null,
      muscleId: sendData.muscleId,
    },
    include: { muscle: true },
  });

  const validatedExercise = exerciseReturnSchema.parse(exerciseUpdated);

  return validatedExercise;
};

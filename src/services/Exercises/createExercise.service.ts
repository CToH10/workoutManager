import { prisma } from "../../app";
import { iExerciseRequest, iExerciseReturn } from "../../interfaces/";
import { exerciseReturnSchema } from "../../schemas";

export const createExerciseService = async (
  data: iExerciseRequest
): Promise<iExerciseReturn> => {
  const { name, description, muscleId } = data;

  let sendData = description
    ? {
        name,
        muscle: { connect: { id: muscleId } },
        description: description,
      }
    : { name, muscle: { connect: { id: muscleId } } };
  const insertExercise = await prisma.exercise.create({
    data: sendData,
    include: { muscle: true },
  });

  const validatedExercise = exerciseReturnSchema.parse(insertExercise);

  return validatedExercise;
};

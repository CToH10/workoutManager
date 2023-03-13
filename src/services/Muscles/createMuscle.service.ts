import { prisma } from "../../app";
import { iMuscleRequest } from "../../interfaces";

export const createMuscleService = async (data: iMuscleRequest) => {
  const muscleGroup = await prisma.muscle_group.create({ data: data });

  return muscleGroup;
};

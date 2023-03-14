import { prisma } from "../../app";

export const deleteMuscleService = async (id: number): Promise<void> => {
  await prisma.muscle_group.delete({ where: { id } });
};

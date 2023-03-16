import { prisma } from "../../app";

export const deleteWorkoutService = async (id: number): Promise<void> => {
  await prisma.daily_workout.delete({ where: { id } });
};

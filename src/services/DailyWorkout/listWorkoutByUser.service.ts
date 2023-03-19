import { prisma } from "../../app";
import { workoutByUserSchema } from "../../schemas";

export const listWorkoutByUserService = async (id: number) => {
  const workout = await prisma.user.findUnique({
    where: { id: id },
    include: {
      dailyWorkout: true,
    },
  });

  const validatedWorkout = workoutByUserSchema.parse(workout);

  return validatedWorkout;
};

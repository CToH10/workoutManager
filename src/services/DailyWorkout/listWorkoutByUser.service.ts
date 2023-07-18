import { prisma } from "../../app";
import { workoutByUserSchema } from "../../schemas";

export const listWorkoutByUserService = async (id: number) => {
  const workout = await prisma.user.findUnique({
    where: { id: id },
    include: {
      daily_workout: {
        include: {
          daily_exercise: {
            select: {
              totalLoad: true,
              reps: true,
              series: true,
              weight: true,
              exercise: {
                select: {
                  name: true,
                  id: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const validatedWorkout = workoutByUserSchema.parse(workout);

  return validatedWorkout;
};

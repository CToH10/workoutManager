import { dailyExerciseSchema } from "./dailyExercise.schema";
import { z } from "zod";
import { userReturnSchema } from "./users.schemas";

export const dailyWorkoutReturnSchema = z.object({
  id: z.number(),
  date: z.string().datetime().or(z.date()),
  daily_exercise: z.array(dailyExerciseSchema),
  user: z.object({
    name: z.string(),
  }),
});

export const workoutByUserSchema = userReturnSchema
  .extend({
    daily_workout: z.array(
      z.object({
        id: z.number(),
        userId: z.number(),
        date: z.string().or(z.date()),
        daily_exercise: z
          .array(
            z.object({
              exercise: z.object({
                name: z.string(),
                id: z.number(),
              }),
              series: z.number(),
              reps: z.number(),
              weight: z.number(),
              totalLoad: z.number(),
            })
          )
          .nullish(),
      })
    ),
  })
  .omit({
    createdAt: true,
    deletedAt: true,
    updatedAt: true,
  });

export const dailyWorkoutUpdateSchema = z.object({
  date: z.string(),
});

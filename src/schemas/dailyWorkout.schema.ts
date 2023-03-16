import { number, z } from "zod";
import { dailyExerciseSchema } from "./dailyExercise.schema";
import { userReturnSchema } from "./users.schemas";

export const dailyWorkoutRequestSchema = z.object({
  userId: z.number(),
});

export const dailyWorkoutReturnSchema = dailyWorkoutRequestSchema
  .extend({
    id: z.number(),
    date: z.string().datetime().or(z.date()),
    daily_exercise: z.array(dailyExerciseSchema),
    user: z.object({
      name: z.string(),
    }),
  })
  .omit({ userId: true });

export const workoutByUserSchema = userReturnSchema.extend({
  dailyWorkout: z.array(
    z.object({
      date: z.string().or(z.date()),
      id: z.number(),
    })
  ),
});

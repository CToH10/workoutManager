import { z } from "zod";
import { dailyExerciseSchema } from "./dailyExercise.schema";
import { userReturnSchema } from "./users.schemas";

export const dailyWorkoutReturnSchema = z.object({
  id: z.number(),
  date: z.string().datetime().or(z.date()),
  daily_exercise: z.array(dailyExerciseSchema),
  user: z.object({
    name: z.string(),
  }),
});

export const workoutByUserSchema = userReturnSchema.extend({
  dailyWorkout: z.array(
    z.object({
      date: z.string().or(z.date()),
      id: z.number(),
    })
  ),
});

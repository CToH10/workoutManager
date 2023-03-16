import { z } from "zod";
import { dailyExerciseSchema } from "./dailyExercise.schema";

export const dailyWorkoutRequestSchema = z.object({
  userId: z.number(),
});

export const dailyWorkoutReturnSchema = dailyWorkoutRequestSchema.extend({
  id: z.number(),
  date: z.string().datetime().or(z.date()),
  daily_exercise: z.array(dailyExerciseSchema).optional(),
});

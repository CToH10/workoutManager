import { z } from "zod";
import { dailyWorkoutReturnSchema } from "./dailyWorkout.schema";

export const dailyExerciseRequestSchema = z.object({
  exerciseId: z.number(),
  weight: z.number(),
  series: z.number(),
  reps: z.number(),
});

export const dailyExerciseSchema = dailyExerciseRequestSchema
  .extend({
    id: z.number(),
    exercise: z.object({ name: z.string() }),
    totalLoad: z.number(),
  })
  .omit({ exerciseId: true });

export const dailyExerciseReturnSchema = dailyWorkoutReturnSchema
  .extend({
    user: z.object({ name: z.string() }),
    daily_exercise: z.array(dailyExerciseSchema),
  })
  .omit({ userId: true });
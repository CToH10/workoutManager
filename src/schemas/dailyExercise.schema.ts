import { z } from "zod";

export const dailyExerciseRequestSchema = z.object({
  exerciseId: z.number(),
  weight: z.number(),
  series: z.number(),
  reps: z.number(),
});

export const dailyExerciseReturnSchema = dailyExerciseRequestSchema.extend({
  id: z.number(),
  dailyWorktoutId: z.number(),
  totalLoad: z.number(),
});

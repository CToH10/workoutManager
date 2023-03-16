import { z } from "zod";

export const dailyWorkoutRequestSchema = z.object({
  userId: z.number(),
});

export const dailyWorkoutReturnSchema = dailyWorkoutRequestSchema.extend({
  id: z.number(),
  date: z.string().datetime().or(z.date()),
});

import { z } from "zod";

export const muscleRequestSchema = z.object({
  name: z.string().max(50),
});

export const muscleReturnSchema = muscleRequestSchema.extend({
  id: z.number(),
  exercises: z.array(z.any()).nullish(),
});

export const muscleListSchema = z.array(muscleReturnSchema);

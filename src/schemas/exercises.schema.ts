import { z } from "zod";

export const exerciseRequestSchema = z.object({
  name: z.string().max(50),
  description: z.string().nullish(),
  muscleId: z.number(),
});

export const exerciseReturnSchema = exerciseRequestSchema
  .extend({
    id: z.number(),
    muscle: z.object({
      name: z.string(),
    }),
  })
  .omit({ muscleId: true });

export const exerciseListSchema = z.array(exerciseReturnSchema);

import { z } from "zod";

export const exerciseRequestSchema = z.object({
  name: z.string().max(50),
  description: z.string().nullish(),
  muscleGroupId: z.number(),
});

export const exerciseReturnSchema = exerciseRequestSchema
  .extend({
    id: z.number(),
    muscle: z.object({
      name: z.string(),
    }),
  })
  .omit({ muscleGroupId: true });

export const exerciseListSchema = z.array(exerciseReturnSchema);

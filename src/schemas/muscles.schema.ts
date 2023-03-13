import { z } from "zod";

export const muscleRequestSchema = z.object({
  name: z.string().max(50),
});

export const muscleReturnSchema = muscleRequestSchema.extend({
  id: z.number(),
});

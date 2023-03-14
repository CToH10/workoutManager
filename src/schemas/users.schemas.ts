import { z } from "zod";

export const userRequestSchema = z.object({
  name: z.string().max(50),
  email: z.string().max(50).email(),
  trainingExp: z.enum(["beg", "int", "adv", "pro"]).optional(),
  password: z.string(),
  admin: z.boolean().optional(),
});

export const userReturnSchema = userRequestSchema
  .extend({
    id: z.number(),
    createdAt: z.date().or(z.string()),
    updatedAt: z.date().or(z.string()),
    deletedAt: z.date().or(z.string()).nullish(),
  })
  .omit({ password: true });

export const userListSchema = z.array(userReturnSchema);

export const userUpdateSchema = userRequestSchema.deepPartial();

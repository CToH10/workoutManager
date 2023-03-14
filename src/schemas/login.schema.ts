import { z } from "zod";

export const loginUserSchema = z.object({
  email: z.string().max(50).email(),
  password: z.string(),
});
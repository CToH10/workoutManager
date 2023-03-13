import { z } from "zod";
import { muscleRequestSchema, muscleReturnSchema } from "../schemas";

export type iMuscleRequest = z.infer<typeof muscleRequestSchema>;

export type iMuscleReturn = z.infer<typeof muscleReturnSchema>;

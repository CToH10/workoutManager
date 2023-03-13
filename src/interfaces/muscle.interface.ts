import { z } from "zod";
import {
  muscleListSchema,
  muscleRequestSchema,
  muscleReturnSchema,
} from "../schemas";

export type iMuscleRequest = z.infer<typeof muscleRequestSchema>;

export type iMuscleReturn = z.infer<typeof muscleReturnSchema>;

export type iMuscleList = z.infer<typeof muscleListSchema>;

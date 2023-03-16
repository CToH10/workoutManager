import { z } from "zod";
import {
  dailyExerciseRequestSchema,
  dailyExerciseReturnSchema,
} from "../schemas";

export type iDailyExerciseRequest = z.infer<typeof dailyExerciseRequestSchema>;

export type iDailyExerciseReturn = z.infer<typeof dailyExerciseReturnSchema>;

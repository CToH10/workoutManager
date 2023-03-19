import { z } from "zod";
import {
  dailyExerciseRequestSchema,
  dailyExerciseReturnSchema,
  dailyExerciseUpdateSchema,
} from "../schemas";

export type iDailyExerciseRequest = z.infer<typeof dailyExerciseRequestSchema>;

export type iDailyExerciseReturn = z.infer<typeof dailyExerciseReturnSchema>;

export type iDailyExerciseUpdate = z.infer<typeof dailyExerciseUpdateSchema>;

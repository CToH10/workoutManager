import { z } from "zod";
import {
  dailyWorkoutRequestSchema,
  dailyWorkoutReturnSchema,
} from "../schemas";

export type iDailyWorkoutRequest = z.infer<typeof dailyWorkoutRequestSchema>;

export type iDailyWorkoutReturn = z.infer<typeof dailyWorkoutReturnSchema>;

import { z } from "zod";
import { dailyWorkoutReturnSchema } from "../schemas";

export type iDailyWorkoutReturn = z.infer<typeof dailyWorkoutReturnSchema>;

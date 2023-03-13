import { z } from "zod";
import {
  exerciseByGroupListSchema,
  exerciseListSchema,
  exerciseRequestSchema,
  exerciseReturnSchema,
  exerciseUpdateSchema,
} from "../schemas";

export type iExerciseRequest = z.infer<typeof exerciseRequestSchema>;

export type iExerciseReturn = z.infer<typeof exerciseReturnSchema>;

export type iExerciseList = z.infer<typeof exerciseListSchema>;

export type iExerciseByGroup = z.infer<typeof exerciseByGroupListSchema>;

export type iExerciseUpdate = z.infer<typeof exerciseUpdateSchema>;

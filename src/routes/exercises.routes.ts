import { Router } from "express";
import { createExerciseController } from "../controllers";
import { protectData, uniqueExerciseName } from "../middlewares";
import { exerciseRequestSchema } from "../schemas";

export const exerciseRoute: Router = Router();

exerciseRoute.post(
  "",
  protectData(exerciseRequestSchema),
  uniqueExerciseName,
  createExerciseController
);

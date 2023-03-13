import { Router } from "express";
import {
  createExerciseController,
  listAllExercisesController,
  listExerciseByGroupController,
} from "../controllers";
import { protectData, uniqueExerciseName } from "../middlewares";
import { exerciseRequestSchema } from "../schemas";

export const exerciseRoute: Router = Router();

exerciseRoute.post(
  "",
  protectData(exerciseRequestSchema),
  uniqueExerciseName,
  createExerciseController
);
exerciseRoute.get("", listAllExercisesController);
exerciseRoute.get("/:id", listExerciseByGroupController);

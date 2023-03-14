import { Router } from "express";
import {
  createExerciseController,
  deleteExerciseController,
  listAllExercisesController,
  listExerciseByGroupController,
  updateExerciseController,
} from "../controllers";
import {
  ensureExerciseExists,
  protectData,
  uniqueExerciseName,
} from "../middlewares";
import { exerciseRequestSchema, exerciseUpdateSchema } from "../schemas";

export const exerciseRoute: Router = Router();

exerciseRoute.post(
  "",
  protectData(exerciseRequestSchema),
  uniqueExerciseName,
  createExerciseController
);
exerciseRoute.get("", listAllExercisesController);
exerciseRoute.get("/:id", listExerciseByGroupController);
exerciseRoute.patch(
  "/:id",
  protectData(exerciseUpdateSchema),
  ensureExerciseExists,
  uniqueExerciseName,
  updateExerciseController
);
exerciseRoute.delete("/:id", ensureExerciseExists, deleteExerciseController);

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
  onlyAdminAccess,
  protectData,
  uniqueExerciseName,
  validateToken,
} from "../middlewares";
import { exerciseRequestSchema, exerciseUpdateSchema } from "../schemas";

export const exerciseRoute: Router = Router();

exerciseRoute.post(
  "",
  protectData(exerciseRequestSchema),
  uniqueExerciseName,
  validateToken,
  onlyAdminAccess,
  createExerciseController
);
exerciseRoute.get("", listAllExercisesController);
exerciseRoute.get("/:id", listExerciseByGroupController);
exerciseRoute.patch(
  "/:id",
  protectData(exerciseUpdateSchema),
  ensureExerciseExists,
  uniqueExerciseName,
  validateToken,
  onlyAdminAccess,
  updateExerciseController
);
exerciseRoute.delete(
  "/:id",
  ensureExerciseExists,
  validateToken,
  onlyAdminAccess,
  deleteExerciseController
);

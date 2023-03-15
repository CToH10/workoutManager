import { Router } from "express";
import {
  createMuscleController,
  getAllMusclesController,
  updateMuscleController,
  deleteMuscleGroupController,
} from "../controllers";
import {
  ensureMuscleExists,
  protectData,
  uniqueMuscleName,
  validateToken,
} from "../middlewares";
import { muscleRequestSchema } from "../schemas";

export const muscleRoutes: Router = Router();

muscleRoutes.post(
  "",
  protectData(muscleRequestSchema),
  uniqueMuscleName,
  validateToken,
  createMuscleController
);
muscleRoutes.get("", getAllMusclesController);
muscleRoutes.patch(
  "/:id",
  protectData(muscleRequestSchema),
  ensureMuscleExists,
  uniqueMuscleName,
  validateToken,
  updateMuscleController
);
muscleRoutes.delete(
  "/:id",
  ensureMuscleExists,
  validateToken,
  deleteMuscleGroupController
);

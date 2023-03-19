import { Router } from "express";
import {
  createMuscleController,
  getAllMusclesController,
  updateMuscleController,
  deleteMuscleGroupController,
} from "../controllers";
import {
  ensureMuscleExists,
  onlyAdminAccess,
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
  onlyAdminAccess,
  createMuscleController
);
muscleRoutes.get("", getAllMusclesController);
muscleRoutes.patch(
  "/:id",
  protectData(muscleRequestSchema),
  ensureMuscleExists,
  uniqueMuscleName,
  validateToken,
  onlyAdminAccess,
  updateMuscleController
);
muscleRoutes.delete(
  "/:id",
  ensureMuscleExists,
  validateToken,
  onlyAdminAccess,
  deleteMuscleGroupController
);

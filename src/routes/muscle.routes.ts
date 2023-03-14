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
} from "../middlewares";
import { muscleRequestSchema } from "../schemas";

export const muscleRoutes: Router = Router();

muscleRoutes.post(
  "",
  protectData(muscleRequestSchema),
  uniqueMuscleName,
  createMuscleController
);
muscleRoutes.get("", getAllMusclesController);
muscleRoutes.patch(
  "/:id",
  protectData(muscleRequestSchema),
  ensureMuscleExists,
  uniqueMuscleName,
  updateMuscleController
);
muscleRoutes.delete("/:id", ensureMuscleExists, deleteMuscleGroupController);

import { Router } from "express";
import {
  createMuscleController,
  getAllMusclesController,
} from "../controllers";
import { updateMuscleController } from "../controllers/muscle.controller";
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

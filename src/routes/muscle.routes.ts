import { Router } from "express";
import {
  createMuscleController,
  getAllMusclesController,
} from "../controllers";
import { protectData, uniqueMuscleName } from "../middlewares";
import { muscleRequestSchema } from "../schemas";

export const muscleRoutes: Router = Router();

muscleRoutes.post(
  "",
  protectData(muscleRequestSchema),
  uniqueMuscleName,
  createMuscleController
);
muscleRoutes.get("", getAllMusclesController);

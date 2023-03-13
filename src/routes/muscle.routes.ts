import { Router } from "express";
import { createMuscleController } from "../controllers/muscle.controller";
import { protectData, uniqueMuscleName } from "../middlewares";
import { muscleRequestSchema } from "../schemas";

export const muscleRoutes: Router = Router();

muscleRoutes.post(
  "",
  protectData(muscleRequestSchema),
  uniqueMuscleName,
  createMuscleController
);

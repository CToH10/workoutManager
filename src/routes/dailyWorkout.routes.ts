import { Router } from "express";
import { createWorkoutController } from "../controllers";
import {
  onlyAdminInteractAll,
  protectData,
  validateToken,
} from "../middlewares";
import { dailyWorkoutRequestSchema } from "../schemas";

export const workoutRoute: Router = Router();

workoutRoute.post(
  "",
  protectData(dailyWorkoutRequestSchema),
  validateToken,
  onlyAdminInteractAll,
  createWorkoutController
);

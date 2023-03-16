import { Router } from "express";
import {
  createDailyExerciseController,
  createWorkoutController,
} from "../controllers";
import {
  onlyAdminInteractAll,
  protectData,
  validateToken,
} from "../middlewares";
import {
  dailyExerciseRequestSchema,
  dailyWorkoutRequestSchema,
} from "../schemas";

export const workoutRoute: Router = Router();

workoutRoute.post(
  "",
  protectData(dailyWorkoutRequestSchema),
  validateToken,
  onlyAdminInteractAll,
  createWorkoutController
);
workoutRoute.post(
  "/:id",
  protectData(dailyExerciseRequestSchema),
  validateToken,
  onlyAdminInteractAll,
  createDailyExerciseController
);
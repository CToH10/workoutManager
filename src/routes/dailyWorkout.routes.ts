import { Router } from "express";
import {
  createDailyExerciseController,
  createWorkoutController,
  listWorkoutByIdController,
} from "../controllers";
import {
  ensureExerciseExists,
  onlyAdminInteractAll,
  onlyOneOfEach,
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
  ensureExerciseExists,
  validateToken,
  onlyAdminInteractAll,
  onlyOneOfEach,
  createDailyExerciseController
);

workoutRoute.get(
  "/:id",
  validateToken,
  onlyAdminInteractAll,
  listWorkoutByIdController
);

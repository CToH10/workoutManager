import { Router } from "express";
import {
  createDailyExerciseController,
  createWorkoutController,
  deleteExerciseWorkoutController,
  deleteWorkoutController,
  listWorkoutByIdController,
  listWorkoutByUserController,
  updateDailyExerciseWorkoutController,
} from "../controllers";
import {
  ensureExerciseExists,
  adminOrSelf,
  onlyOneOfEach,
  protectData,
  validateToken,
} from "../middlewares";
import { dailyExerciseRequestSchema } from "../schemas";

export const workoutRoute: Router = Router();

workoutRoute.post("", validateToken, createWorkoutController);
workoutRoute.post(
  "/:id",
  protectData(dailyExerciseRequestSchema),
  ensureExerciseExists,
  validateToken,
  adminOrSelf,
  onlyOneOfEach,
  createDailyExerciseController
);
workoutRoute.get("/:id", validateToken, adminOrSelf, listWorkoutByIdController);
workoutRoute.get(
  "/user/:id",
  validateToken,
  adminOrSelf,
  listWorkoutByUserController
);
workoutRoute.delete(
  "/:id",
  validateToken,
  adminOrSelf,
  deleteWorkoutController
);
workoutRoute.delete(
  "/:id/:exerciseId",
  validateToken,
  adminOrSelf,
  deleteExerciseWorkoutController
);
workoutRoute.patch(
  "/:id/:exerciseId",
  validateToken,
  adminOrSelf,
  updateDailyExerciseWorkoutController
);

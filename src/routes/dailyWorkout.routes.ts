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
  onlyAdminInteractAll,
  onlyOneOfEach,
  protectData,
  validateToken,
} from "../middlewares";
import { dailyExerciseRequestSchema } from "../schemas";

export const workoutRoute: Router = Router();

workoutRoute.post(
  "",
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
workoutRoute.get(
  "/user/:id",
  validateToken,
  onlyAdminInteractAll,
  listWorkoutByUserController
);
workoutRoute.delete(
  "/:id",
  validateToken,
  onlyAdminInteractAll,
  deleteWorkoutController
);
workoutRoute.delete(
  "/:id/:exerciseId",
  validateToken,
  onlyAdminInteractAll,
  deleteExerciseWorkoutController
);
workoutRoute.patch(
  "/:id/:exerciseId",
  validateToken,
  onlyAdminInteractAll,
  updateDailyExerciseWorkoutController
);

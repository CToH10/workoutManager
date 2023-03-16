import { createDailyExerciseController } from "./dailyExercise.controller";
import {
  createWorkoutController,
  deleteExerciseWorkoutController,
  deleteWorkoutController,
  listWorkoutByIdController,
  listWorkoutByUserController,
} from "./dailyWorkout.controller";
import {
  createExerciseController,
  deleteExerciseController,
  listAllExercisesController,
  listExerciseByGroupController,
  updateExerciseController,
} from "./exercises.controller";
import {
  getAllMusclesController,
  createMuscleController,
  deleteMuscleGroupController,
  updateMuscleController,
} from "./muscle.controller";
import {
  createUserController,
  listAllUsersController,
  listUserController,
  updateUserController,
} from "./users.controller";

export {
  createMuscleController,
  getAllMusclesController,
  updateMuscleController,
  deleteMuscleGroupController,
  createExerciseController,
  listAllExercisesController,
  listExerciseByGroupController,
  updateExerciseController,
  deleteExerciseController,
  createUserController,
  listAllUsersController,
  listUserController,
  updateUserController,
  createWorkoutController,
  createDailyExerciseController,
  listWorkoutByIdController,
  listWorkoutByUserController,
  deleteWorkoutController,
  deleteExerciseWorkoutController,
};

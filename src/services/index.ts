import { createExerciseService } from "./Exercises/createExercise.service";
import { deleteExerciseService } from "./Exercises/deleteExercise.service";
import { listAllExercisesService } from "./Exercises/listAllExercises.service";
import { listExerciseByGroupService } from "./Exercises/listExerciseByGroup.service";
import { updateExerciseService } from "./Exercises/updateExercises.service";
import { createMuscleService } from "./Muscles/createMuscle.service";
import { deleteMuscleService } from "./Muscles/deleteMuscleGroup.service";
import { getAllMusclesService } from "./Muscles/getAllMuscles.service";
import { updateMuscleService } from "./Muscles/updateMuscles.service";
import { createUserService } from "./Users/createUser.service";
import { loginUserService } from "./Login/loginUser.service";
import { listAllUsersService } from "./Users/listAllUsers.service";
import { listUserService } from "./Users/listUser.service";
import { updateUserService } from "./Users/updateUser.service";
import { createWorkoutService } from "./DailyWorkout/createWorkout.service";
import { createDailyExerciseService } from "./DailyExercise/createDailyExercise.service";
import { listWorkoutByIdService } from "./DailyWorkout/listWorkoutById.service";
import { listWorkoutByUserService } from "./DailyWorkout/listWorkoutByUser.service";
import { deleteWorkoutService } from "./DailyWorkout/deleteWorkout.service";
import { deleteExerciseWorkoutService } from "./DailyExercise/deleteExercise.service";
import { updateDailyExerciseService } from "./DailyExercise/updateExercise.service";
import { deleteUserService } from "./Users/deleteUser.service";
import { recoverUserService } from "./Users/recoverUser.service";
import { updateDailyWorkoutService } from "./DailyWorkout/updateDailyWorkout.service";

export {
  createMuscleService,
  getAllMusclesService,
  updateMuscleService,
  deleteMuscleService,
  createExerciseService,
  listAllExercisesService,
  listExerciseByGroupService,
  updateExerciseService,
  deleteExerciseService,
  createUserService,
  loginUserService,
  listAllUsersService,
  listUserService,
  updateUserService,
  createWorkoutService,
  createDailyExerciseService,
  listWorkoutByIdService,
  listWorkoutByUserService,
  deleteWorkoutService,
  deleteExerciseWorkoutService,
  updateDailyExerciseService,
  recoverUserService,
  deleteUserService,
  updateDailyWorkoutService,
};

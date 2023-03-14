import { createExerciseService } from "./Exercises/createExercise.service";
import { deleteExerciseService } from "./Exercises/deleteExercise.service";
import { listAllExercisesService } from "./Exercises/listAllExercises.service";
import { listExerciseByGroupService } from "./Exercises/listExerciseByGroup.service";
import { updateExerciseService } from "./Exercises/updateExercises.service";
import { createMuscleService } from "./Muscles/createMuscle.service";
import { deleteMuscleService } from "./Muscles/deleteMuscleGroup.service";
import { getAllMusclesService } from "./Muscles/getAllMuscles.service";
import { updateMuscleService } from "./Muscles/updateMuscles.service";

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
};

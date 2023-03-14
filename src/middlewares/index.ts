import { ensureExerciseExists } from "./Exercises/ensureExerciseExists.middleware";
import { uniqueExerciseName } from "./Exercises/uniqueExercise.middleware";
import { uniqueMuscleName } from "./Muscles/uniqueMuscle.middleware";
import { protectData } from "./protecData.middleware";
uniqueMuscleName;

export {
  protectData,
  uniqueMuscleName,
  uniqueExerciseName,
  ensureExerciseExists,
};

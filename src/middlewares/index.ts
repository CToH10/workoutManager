import { ensureMuscleExists } from "./Muscles/ensureMuscleExists.middleware";
import { ensureExerciseExists } from "./Exercises/ensureExerciseExists.middleware";
import { uniqueExerciseName } from "./Exercises/uniqueExercise.middleware";
import { uniqueMuscleName } from "./Muscles/uniqueMuscle.middleware";
import { protectData } from "./protecData.middleware";
import { uniqueEmail } from "./Users/uniqueEmail.middleware";
uniqueMuscleName;

export {
  protectData,
  uniqueMuscleName,
  ensureMuscleExists,
  uniqueExerciseName,
  ensureExerciseExists,
  uniqueEmail,
};

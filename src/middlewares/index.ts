import { ensureMuscleExists } from "./Muscles/ensureMuscleExists.middleware";
import { ensureExerciseExists } from "./Exercises/ensureExerciseExists.middleware";
import { uniqueExerciseName } from "./Exercises/uniqueExercise.middleware";
import { uniqueMuscleName } from "./Muscles/uniqueMuscle.middleware";
import { protectData } from "./protecData.middleware";
import { uniqueEmail } from "./Users/uniqueEmail.middleware";
import { onlyAdminInteractAll } from "./onlyAdminInteractAll.middleware";
import { validateToken } from "./validateToken.middleware";
import { ensureUserExists } from "./Users/ensureUserExists.middleware";
import { onlyOneOfEach } from "./DailyExercise/onlyOneOfEach.middleware";
import { onlyAdminAccess } from "./onlyAdminAccess.middleware";

export {
  protectData,
  uniqueMuscleName,
  ensureMuscleExists,
  uniqueExerciseName,
  ensureExerciseExists,
  uniqueEmail,
  onlyAdminInteractAll,
  validateToken,
  ensureUserExists,
  onlyOneOfEach,
  onlyAdminAccess,
};

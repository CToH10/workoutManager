import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listAllUsersController,
  listUserController,
  recoverUserController,
  updateUserController,
} from "../controllers";
import {
  ensureUserExists,
  onlyAdminAccess,
  onlyAdminInteractAll,
  protectData,
  uniqueEmail,
  validateToken,
} from "../middlewares";
import { userRequestSchema } from "../schemas";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  protectData(userRequestSchema),
  uniqueEmail,
  createUserController
);
userRoutes.get("", validateToken, listAllUsersController);
userRoutes.get(
  "/:id",
  ensureUserExists,
  validateToken,
  onlyAdminInteractAll,
  listUserController
);
userRoutes.patch(
  "/:id",
  ensureUserExists,
  validateToken,
  onlyAdminInteractAll,
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureUserExists,
  validateToken,
  onlyAdminInteractAll,
  deleteUserController
);
userRoutes.put(
  "/:id",
  ensureUserExists,
  validateToken,
  onlyAdminAccess,
  recoverUserController
);

import { Router } from "express";
import {
  createUserController,
  listAllUsersController,
  listUserController,
  updateUserController,
} from "../controllers";
import {
  ensureUserExists,
  onlyAdminInteractAll,
  onlyAdminReadAll,
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
userRoutes.get("", onlyAdminReadAll, listAllUsersController);
userRoutes.get(
  "/:id",
  ensureUserExists,
  validateToken,

  listUserController
);
userRoutes.patch(
  "/:id",
  ensureUserExists,
  validateToken,
  onlyAdminInteractAll,
  updateUserController
);

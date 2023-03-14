import { Router } from "express";
import {
  createUserController,
  listAllUsersController,
  listUserController,
  updateUserController,
} from "../controllers";
import { onlyAdminInteractAll, protectData, uniqueEmail } from "../middlewares";
import { userRequestSchema } from "../schemas";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  protectData(userRequestSchema),
  uniqueEmail,
  createUserController
);
userRoutes.get("", listAllUsersController);
userRoutes.get("/:id", onlyAdminInteractAll, listUserController);
userRoutes.patch("/:id", updateUserController);

import { Router } from "express";
import { createUserController } from "../controllers";
import { protectData, uniqueEmail } from "../middlewares";
import { userRequestSchema } from "../schemas";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  protectData(userRequestSchema),
  uniqueEmail,
  createUserController
);

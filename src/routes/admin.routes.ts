import { Router } from "express";
import { createUserController } from "../controllers";
import { protectData, uniqueEmail } from "../middlewares";
import { userAdminRequestSchema } from "../schemas";

export const adminRoutes: Router = Router();

adminRoutes.post(
  "",
  protectData(userAdminRequestSchema),
  uniqueEmail,
  createUserController
);

import { Router } from "express";
import { protectData } from "../middlewares";
import { loginUserSchema } from "../schemas/login.schema";
import { loginUserController } from "../controllers/login.controller";

export const loginRoutes: Router = Router();

loginRoutes.post("", protectData(loginUserSchema), loginUserController);

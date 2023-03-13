import { Router } from "express";
import { protectData } from "../middlewares";
import { exerciseRequestSchema } from "../schemas";

export const exerciseRoute: Router = Router();

exerciseRoute.post("", protectData(exerciseRequestSchema));

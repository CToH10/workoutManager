import { Request, Response } from "express";
import { createMuscleService, getAllMusclesService } from "../services";

export const createMuscleController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const createdMuscle = await createMuscleService(request.body);
  return response.status(201).json(createdMuscle);
};

export const getAllMusclesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const allMuscles = await getAllMusclesService();
  return response.json(allMuscles);
};

import { Request, Response } from "express";
import { createExerciseService, listAllExercisesService } from "../services";

export const createExerciseController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const createdExercise = await createExerciseService(request.body);
  return response.status(201).json(createdExercise);
};

export const listAllExercisesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const exerciseList = await listAllExercisesService();
  return response.json(exerciseList);
};

import { Request, Response } from "express";
import { createExerciseService } from "../services";

export const createExerciseController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const createdExercise = await createExerciseService(request.body);
  return response.status(201).json(createdExercise);
};

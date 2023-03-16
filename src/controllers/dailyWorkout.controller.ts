import { Request, Response } from "express";
import { createWorkoutService } from "../services";

export const createWorkoutController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const workout = await createWorkoutService(request.body);
  return response.status(201).json(workout);
};

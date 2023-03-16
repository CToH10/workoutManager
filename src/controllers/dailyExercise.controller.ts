import { Request, Response } from "express";
import {
  createDailyExerciseService,
  listWorkoutByIdService,
} from "../services";

export const createDailyExerciseController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = Number(request.params.id);
  const dailyExercise = await createDailyExerciseService(request.body, id);
  return response.status(201).json(dailyExercise);
};

export const listWorkoutByIdController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = Number(request.params.id);
  const workout = await listWorkoutByIdService(id);
  return response.json(workout);
};

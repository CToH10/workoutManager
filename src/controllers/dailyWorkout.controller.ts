import { Request, Response } from "express";
import {
  createWorkoutService,
  deleteExerciseWorkoutService,
  deleteWorkoutService,
  listWorkoutByIdService,
  listWorkoutByUserService,
} from "../services";

export const createWorkoutController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId = Number(request.info.id);
  const workout = await createWorkoutService(userId);
  return response.status(201).json(workout);
};

export const listWorkoutByIdController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = Number(request.params.id);
  const workout = await listWorkoutByIdService(id);
  return response.json(workout);
};

export const listWorkoutByUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = Number(request.params.id);
  const workout = await listWorkoutByUserService(id);
  return response.json(workout);
};

export const deleteWorkoutController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = Number(request.params.id);
  await deleteWorkoutService(id);
  return response.status(204).json();
};

export const deleteExerciseWorkoutController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = Number(request.params.exerciseId);
  await deleteExerciseWorkoutService(id);
  return response.status(204).json();
};

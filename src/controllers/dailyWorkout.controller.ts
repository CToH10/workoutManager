import { Request, Response } from "express";
import {
  createWorkoutService,
  listWorkoutByIdService,
  listWorkoutByUserService,
} from "../services";

export const createWorkoutController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const workout = await createWorkoutService(request.body);
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

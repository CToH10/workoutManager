import { Request, Response } from "express";
import {
  createExerciseService,
  deleteExerciseService,
  listAllExercisesService,
  listExerciseByGroupService,
  updateExerciseService,
} from "../services";

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

export const listExerciseByGroupController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = Number(request.params.id);
  const exerciseByGroup = await listExerciseByGroupService(id);
  return response.json(exerciseByGroup);
};

export const updateExerciseController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = Number(request.params.id);
  const updatedExercise = await updateExerciseService(request.body, id);
  return response.json(updatedExercise);
};

export const deleteExerciseController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = Number(request.params.id);
  await deleteExerciseService(id);
  return response.status(204).json();
};

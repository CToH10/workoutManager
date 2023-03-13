import { Request, Response } from "express";
import {
  createExerciseService,
  listAllExercisesService,
  listExerciseByGroupService,
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

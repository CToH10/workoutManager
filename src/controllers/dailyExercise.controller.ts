import { Request, Response } from "express";
import {
  createDailyExerciseService,
  deleteExerciseWorkoutService,
  updateDailyExerciseService,
} from "../services";

export const createDailyExerciseController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = Number(request.params.id);
  const dailyExercise = await createDailyExerciseService(request.body, id);
  return response.status(201).json(dailyExercise);
};

export const deleteExerciseWorkoutController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = Number(request.params.exerciseId);
  await deleteExerciseWorkoutService(id);
  return response.status(204).json();
};

export const updateDailyExerciseWorkoutController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const exerciseId: number = Number(request.params.exerciseId);
  const workoutId: number = Number(request.params.id);
  const updated = await updateDailyExerciseService(
    request.body,
    exerciseId,
    workoutId
  );

  return response.json(updated);
};

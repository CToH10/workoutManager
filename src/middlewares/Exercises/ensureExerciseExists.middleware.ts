import { NextFunction, Request, Response } from "express";
import { prisma } from "../../app";
import { AppError } from "../../errors";

export const ensureExerciseExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const id: number = Number(request.params.id);
  const isNumber = Number.isNaN(id);

  if (isNumber) {
    throw new AppError("Id must be an integer");
  }

  const alreadyExists = await prisma.exercise.findUnique({
    where: {
      id,
    },
  });

  if (!alreadyExists) {
    throw new AppError(`Exercise not found`, 404);
  }

  return next();
};

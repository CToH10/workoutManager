import { NextFunction, Request, Response } from "express";
import { prisma } from "../../app";
import { AppError } from "../../errors";

export const ensureMuscleExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const id: number = Number(request.params.id);
  const isNumber = Number.isNaN(id);

  if (isNumber) {
    throw new AppError("Id must be an integer");
  }

  const alreadyExists = await prisma.muscle_group.findUnique({
    where: {
      id,
    },
  });

  if (!alreadyExists) {
    throw new AppError(`Muscle group not found`, 404);
  }

  return next();
};

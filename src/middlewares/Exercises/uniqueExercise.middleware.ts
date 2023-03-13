import { NextFunction, Request, Response } from "express";
import { prisma } from "../../app";
import { AppError } from "../../errors";

export const uniqueExerciseName = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const name: string = request.body.name;

  if (name) {
    const alreadyExists = await prisma.exercise
      .findUnique({
        where: {
          name,
        },
      })
      .catch((err) => console.error(err));

    if (alreadyExists) {
      throw new AppError(`${name} exercise already exists`, 409);
    }
  }

  return next();
};

import { NextFunction, Request, Response } from "express";
import { prisma } from "../../app";
import { AppError } from "../../errors";

export const uniqueExerciseName = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const name: string = request.body.name;

  const alreadyExists = await prisma.exercise
    .findFirst({
      where: {
        name: name,
      },
    })
    .catch((err) => console.log(err));

  if (alreadyExists) {
    throw new AppError("Exercise already exists", 409);
  }
  return next();
};

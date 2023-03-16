import { NextFunction, Request, Response } from "express";
import { prisma } from "../../app";
import { AppError } from "../../errors";

export const onlyOneOfEach = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const id: number = Number(request.body.exerciseId);

  const alreadyExists = await prisma.daily_workout
    .findFirst({
      include: {
        daily_exercise: { where: { exerciseId: id } },
      },
    })
    .catch((err) => console.error(err));

  if (alreadyExists?.daily_exercise.length !== 0) {
    throw new AppError(`Exercise already exists`, 409);
  }

  return next();
};

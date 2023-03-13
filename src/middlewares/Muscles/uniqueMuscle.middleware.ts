import { NextFunction, Request, Response } from "express";
import { prisma } from "../../app";
import { AppError } from "../../errors";

export const uniqueMuscleName = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const name: string = request.body.name;

  const alreadyExists = await prisma.muscle_group
    .findFirst({
      where: {
        name: name,
      },
    })
    .catch((err) => console.log(err));

  if (alreadyExists) {
    throw new AppError("Muscle group already exists", 409);
  }
  return next();
};

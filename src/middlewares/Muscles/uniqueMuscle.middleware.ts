import { NextFunction, Request, Response } from "express";
import { prisma } from "../../app";
import { AppError } from "../../errors";

export const uniqueMuscleName = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const name: string = request.body.name;

  if (name) {
    const alreadyExists = await prisma.muscle_group
      .findUnique({
        where: {
          name: name,
        },
      })
      .catch((err) => console.error(err));

    if (alreadyExists) {
      throw new AppError(`${name} muscle group already exists`, 409);
    }
  }

  return next();
};

import { NextFunction, Request, Response } from "express";
import { prisma } from "../../app";
import { AppError } from "../../errors";

export const ensureUserExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const id: number = Number(request.params.id);
  const isNumber = Number.isNaN(id);

  if (isNumber) {
    throw new AppError("Id must be an integer");
  }

  const alreadyExists = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!alreadyExists) {
    throw new AppError(`User not found`, 404);
  }

  return next();
};

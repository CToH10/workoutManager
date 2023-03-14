import { NextFunction, Request, Response } from "express";
import { prisma } from "../../app";
import { AppError } from "../../errors";

export const uniqueEmail = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const email: string = request.body.email;
  const alreadyExists = await prisma.user
    .findUnique({
      where: {
        email: email,
      },
      select: { email: true },
    })
    .catch((err) => console.error(err));

  if (alreadyExists) {
    throw new AppError(`${email} already registered`, 409);
  }

  return next();
};

//JSON.parse(email) => unexpected token l at position 0

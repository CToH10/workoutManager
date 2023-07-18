import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { prisma } from "../app";

export const adminOrSelf = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { admin, id } = request.info;
  const { id: workoutId } = request.params;

  const workout = await prisma.daily_workout.findFirst({
    where: {
      id: Number(workoutId),
    },
  });

  if (!admin && workout?.userId !== Number(id)) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

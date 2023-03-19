import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const onlyAdminAccess = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const paramsId: number = parseInt(request.params.id);

  const { admin } = request.info;

  if (!admin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

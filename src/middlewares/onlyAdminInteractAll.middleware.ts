import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import { AppError } from "../errors";

export const onlyAdminInteractAll = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const paramsId: number = parseInt(request.params.id);

  const { id, admin } = request.info;

  if (Number(id) !== paramsId && !admin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

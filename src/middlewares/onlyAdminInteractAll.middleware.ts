import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import { AppError } from "../errors";

export const onlyAdminInteractAll = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token: string | undefined = request.headers.authorization?.slice(7);
  const id: number = parseInt(request.params.id);

  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  const info: string | JwtPayload = verify(token, process.env.SECRET_KEY!);

  if (Number(info.sub) !== id && typeof info === "object" && !info.admin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

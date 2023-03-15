import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import { AppError } from "../errors";

export const onlyAdminReadAll = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token: string | undefined = request.headers.authorization?.replace(
    "Bearer ",
    ""
  );

  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  const info: string | JwtPayload = verify(
    token,
    JSON.stringify(process.env.SECRET_KEY)
  );

  if (typeof info === "object" && info.admin) {
    request.admin = info.admin;
  }

  return next();
};

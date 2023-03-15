import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors";

export const validateToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {

  const token = request.headers.authorization?.replace("Bearer ", "");

  if (token) {
    jwt.verify(token, JSON.stringify(process.env.SECRET_KEY));
  } else {
    throw new AppError("Missing bearer token", 401);
  }

  return next();
};

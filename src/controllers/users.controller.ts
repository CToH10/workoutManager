import { Request, Response } from "express";
import { createUserService } from "../services";

export const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const createdUser = await createUserService(request.body);
  return response.status(201).json(createdUser);
};

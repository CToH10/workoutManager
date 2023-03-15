import { Request, Response } from "express";
import { loginUserService } from "../services";

export const loginUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {

  const token = await loginUserService(request.body);

  return response.status(201).json(token)
}
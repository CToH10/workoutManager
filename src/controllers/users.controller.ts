import { Request, Response } from "express";
import {
  createUserService,
  listAllUsersService,
  listUserService,
  updateUserService,
} from "../services";

export const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const createdUser = await createUserService(request.body);
  return response.status(201).json(createdUser);
};

export const listAllUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const admin: boolean = request.admin;
  const list = await listAllUsersService(admin);
  return response.json(list);
};

export const listUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = Number(request.params.id);
  const user = await listUserService(id);
  return response.json(user);
};

export const updateUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = Number(request.params.id);
  // const user = await updateUserService(request.body, id, admin);
  return response.json();
};

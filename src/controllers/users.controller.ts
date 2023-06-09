import { Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  listAllUsersService,
  listUserService,
  recoverUserService,
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
  const admin: boolean = request.info.admin;
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
  const admin: boolean = request.info.admin;
  const user = await updateUserService(request.body, id, admin);
  return response.json(user);
};

export const deleteUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = Number(request.params.id);
  await deleteUserService(id);

  return response.status(204).send();
};

export const recoverUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = Number(request.params.id);

  const user = await recoverUserService(id);

  return response.json(user);
};

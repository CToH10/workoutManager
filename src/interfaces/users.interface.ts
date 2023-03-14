import { z } from "zod";
import {
  userRequestSchema,
  userReturnSchema,
  userListSchema,
  userUpdateSchema,
} from "../schemas";

export type iUserRequest = z.infer<typeof userRequestSchema>;

export type iUserReturn = z.infer<typeof userReturnSchema>;

export type iUserList = z.infer<typeof userListSchema>;

export type iUserUpdate = z.infer<typeof userUpdateSchema>;

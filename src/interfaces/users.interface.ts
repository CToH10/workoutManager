import { z } from "zod";
import {
  userRequestSchema,
  userReturnSchema,
  userListSchema,
  userUpdateSchema,
  userAdminRequestSchema,
} from "../schemas";

export type iUserRequest = z.infer<typeof userAdminRequestSchema>;

export type iUserReturn = z.infer<typeof userReturnSchema>;

export type iUserList = z.infer<typeof userListSchema>;

export type iUserUpdate = z.infer<typeof userUpdateSchema>;

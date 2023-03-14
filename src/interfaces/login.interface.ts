import { z } from "zod";
import {
  loginUserSchema
} from "../schemas/login.schema";

export type iLoginInterface = z.infer<typeof loginUserSchema>;
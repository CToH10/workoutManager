import "express-async-errors";
import express, { Application } from "express";
import { PrismaClient } from "@prisma/client";
import {
  adminRoutes,
  exerciseRoute,
  loginRoutes,
  muscleRoutes,
  userRoutes,
} from "./routes";
import { ErrorHandler } from "./errors";

export const prisma = new PrismaClient();

export const app: Application = express();
app.use(express.json());

app.use("/muscles", muscleRoutes);
app.use("/exercises", exerciseRoute);
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/admin", adminRoutes);

app.use(ErrorHandler);

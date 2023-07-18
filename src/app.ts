import "express-async-errors";
import express, { Application } from "express";
import { PrismaClient } from "@prisma/client";
import {
  workoutRoute,
  exerciseRoute,
  loginRoutes,
  muscleRoutes,
  userRoutes,
  adminRoutes,
} from "./routes";
import { ErrorHandler } from "./errors";

export const prisma = new PrismaClient();

const cors = require("cors");

export const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/muscles", muscleRoutes);
app.use("/exercises", exerciseRoute);
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/workout", workoutRoute);
app.use("/admin", adminRoutes);

app.use(ErrorHandler);

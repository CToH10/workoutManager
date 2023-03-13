import "express-async-errors";
import express, { Application } from "express";
import { PrismaClient } from "@prisma/client";
import { muscleRoutes } from "./routes";
import { ErrorHandler } from "./errors";

export const prisma = new PrismaClient();

export const app: Application = express();
app.use(express.json());

app.use("/muscles", muscleRoutes);

// app.get("/muscles", async (req, res) => {
//   const posts = await prisma.muscle_group.findMany({
//     include: { exercises: true },
//   });

//   res.json(posts);
// });

// example req

app.use(ErrorHandler);

import express, { Application } from "express";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const app: Application = express();
app.use(express.json());

// app.get("/muscles", async (req, res) => {
//   const posts = await prisma.muscle_group.findMany({
//     include: { exercises: true },
//   });

//   res.json(posts);
// });

// example req

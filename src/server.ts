import { app } from "./app";

const port: number = parseInt(process.env.PORT!) || 3000;

const message: string = `Server running on http://localhost:${port}`;

app.listen(port, () => {
  console.log(message);
});

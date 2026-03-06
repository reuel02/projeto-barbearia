import express from "express";
import "dotenv/config";
import usersRouter from "./routes/users.routes.js";
import authRouter from "./routes/auth.routes.js";
import { authMiddleware } from "./middlewares/auth.middleware.js";

const app = express();

app.use(express.json());

app.use("/autenticar", authRouter);

app.use(authMiddleware);

app.use("/usuarios", usersRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
});

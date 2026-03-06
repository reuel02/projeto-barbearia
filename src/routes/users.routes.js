import { Router } from "express";
import { clientList } from "../controllers/users/clientList.js";
import { barbersList } from "../controllers/users/barberList.js";

const usersRouter = Router();

usersRouter.get("/listar/barbeiros", barbersList);
usersRouter.get("/listar/clientes", clientList);

export default usersRouter;

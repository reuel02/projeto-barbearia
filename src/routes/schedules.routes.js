import { Router } from "express";
import { insertSchedules } from "../controllers/schedules/insertSchedules.js";
import { listSchedules } from "../controllers/schedules/listSchedules.js";

const schedulesRouter = Router();

schedulesRouter.post("/inserir/:id", insertSchedules);
schedulesRouter.get("/listar", listSchedules);

export default schedulesRouter;

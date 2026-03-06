import { Router } from "express";
import { listServices } from "../controllers/services/listServices.js";
import { insertService } from "../controllers/services/insertService.js";

const servicesRouter = Router();

servicesRouter.get("/listar", listServices);
servicesRouter.post("/cadastrar", insertService);

export default servicesRouter;

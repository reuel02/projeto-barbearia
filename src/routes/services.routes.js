import { Router } from "express";
import { listServices } from "../controllers/services/listServices.js";
import { insertService } from "../controllers/services/insertService.js";
import { updateService } from "../controllers/services/updateService.js";

const servicesRouter = Router();

servicesRouter.get("/listar", listServices);
servicesRouter.post("/cadastrar", insertService);
servicesRouter.patch("/atualizar/:id", updateService);

export default servicesRouter;

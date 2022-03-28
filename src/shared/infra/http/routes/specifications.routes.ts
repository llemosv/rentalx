import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAutheticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const specificationsRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAutheticated);

specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };

import express from "express"
import { Response, Request} from "express"
import { AppUserController } from "../controllers/app-user.controller";

const router = express.Router();

const appUserController = new AppUserController();

router.post("/create", (req: Request, res: Response) => appUserController.create(req, res));

export default router;
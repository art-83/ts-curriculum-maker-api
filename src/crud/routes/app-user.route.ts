import express from "express"
import { Response, Request} from "express"
import { AppUserController } from "../controllers/app-user.controller";

const router = express.Router();

const appUserController = new AppUserController();

router.post("/register", (req: Request, res: Response) => appUserController.createAppUserCredentials(req, res));
router.post("/login", (req: Request, res: Response) => appUserController.loginAppUserCredentials(req, res));

export default router;
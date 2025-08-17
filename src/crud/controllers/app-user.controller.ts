import { Request, Response } from "express";
import { AppUserService } from "../services/app-user.service";
import { AppUserCredentialsDTO } from "../dtos/app-user-credentials.dto";
import { ca } from "zod/v4/locales/index.cjs";

const userService = new AppUserService();

export class AppUserController {

    appUserService: AppUserService = new AppUserService();

    async createAppUserCredentials(req: Request<{}, {}, AppUserCredentialsDTO>, res: Response): Promise<Response> {
        try {
            await this.appUserService.saveAppUserCredentials(req.body);
        } catch (error) {
            return res.status(500).json({ message: "Error trying to register." });
        }
        return res.status(200).json(req.body);
    }
}

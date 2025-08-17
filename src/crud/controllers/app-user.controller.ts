import { Request, Response } from "express";
import { AppUserService } from "../services/app-user.service";
import { AppUserCredentialsDTO } from "../dtos/app-user-credentials.dto";
import { AppUserValidator } from "../middlewares/validation/app-user.validator";

export class AppUserController {
    private readonly appUserValidator: AppUserValidator = new AppUserValidator();
    private readonly appUserService: AppUserService = new AppUserService();

    public async createAppUserCredentials(req: Request<{}, {}, AppUserCredentialsDTO>, res: Response): Promise<Response> {
        try {
            this.appUserValidator.validateAppUserCredentialsDTO(req.body);
            const appUserCredential = await this.appUserService.saveAppUserCredentials(req.body);
            return res.status(200).json(appUserCredential);
        } catch (error) {
            return res.status(500).json({ message: "Error trying to register." });
        }
    }
}

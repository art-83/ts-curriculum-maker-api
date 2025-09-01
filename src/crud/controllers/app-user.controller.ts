import { Request, Response } from "express";
import { AppUserService } from "../services/app-user.service";
import { AppUserCredentialsType } from "../types/app-user-credentials";
import { AppUserValidator } from "../middlewares/validation/app-user.validator";
import { AppUserLoginRequestType } from "../types/app-user-login-request";

export class AppUserController {
    private readonly appUserValidator: AppUserValidator = new AppUserValidator();
    private readonly appUserService: AppUserService = new AppUserService();

    public async createAppUserCredentials(req: Request<{}, {}, AppUserCredentialsType>, res: Response): Promise<Response> {
        try {
            this.appUserValidator.validateAppUserCredentials(req.body);
            const appUserCredential = await this.appUserService.registerAppUserCredentials(req.body);
            return res.status(200).json(appUserCredential);
        } catch (error: any) {
            return res.status(500).json({error: error.message});
        }
    }

    public async loginAppUserCredentials(req: Request<{}, {}, AppUserLoginRequestType>, res: Response): Promise<Response> {
        try{
            this.appUserValidator.validadeAppUserLoginRequest(req.body);
            const appUserLogin = await this.appUserService.loginAppUserCredentials(req.body);
            return res.status(200).json(appUserLogin);
        } catch (error: any) {
            return res.status(500).json({error: error.message});
        }
    }
}

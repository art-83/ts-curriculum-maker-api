import { email, z } from "zod";
import { RoleEnum } from "../../models/enums/user-role.enum";
import { AppUserCredentialsType } from "../../types/app-user-credentials";
import { AppUserLoginRequestType } from "../../types/app-user-login-request";

export class AppUserValidator {
    public validateAppUserCredentials(appUserCredentialsType: AppUserCredentialsType): void {
        const appUserCredentialsSchema = z.object({
            email: z.email(),
            password: z.string(),
            cpf: z.string(),
            role: z.enum(RoleEnum)
        });
        const validation = appUserCredentialsSchema.safeParse(appUserCredentialsType);
        if(!validation.success) {
            throw validation.error.message;
        }
    }

    public validadeAppUserLoginRequest(appUserLoginRequest: AppUserLoginRequestType): void {
        const appUserLoginRequestSchema = z.object({
            email: z.email(),
            password: z.string()
        });
        const validation = appUserLoginRequestSchema.safeParse(appUserLoginRequest);
        if(!validation.success) {
            throw validation.error.message;
        }
    }
}
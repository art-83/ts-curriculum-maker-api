import { z } from "zod";
import { RoleEnum } from "../../models/enums/user-role.enum";
import { AppUserCredentialsDTO } from "../../dtos/app-user-credentials.dto";

export class AppUserValidator {
    public validateAppUserCredentialsDTO(appUserCredentialsDTO: AppUserCredentialsDTO): void {
        const appUserCredentialsSchema = z.object({
            email: z.email(),
            password: z.string(),
            cpf: z.string(),
            role: z.enum(RoleEnum)
        });
        const validation = appUserCredentialsSchema.safeParse(appUserCredentialsDTO);
        if(!validation.success) {
            throw validation.error;
        }
    }
}
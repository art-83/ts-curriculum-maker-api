import { z } from "zod";
import { RoleEnum } from "../../models/enums/user-role.enum";
import { AppUserCredentialsDTO } from "../../dtos/app-user-credentials.dto";
import { AppUserCredentials } from "../../models/entity/app-user-credentials.entity";
import { AppUserCredentialsMapper } from "../../mappers/app-user-credentials.mapper";

export class AppUserValidator {

    appUserCredentialsMapper: AppUserCredentialsMapper;

    validateAppUserCredentialsDTO(appUserCredentialsDTO: AppUserCredentialsDTO): void {
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
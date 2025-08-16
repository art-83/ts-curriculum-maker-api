import { z } from "zod";
import { AppUserDTO } from "../../dtos/app-user.dto";
import { RoleEnum } from "../../models/enums/role.enum";
import { LangEnum } from "../../models/enums/lang.enum";
import { FrameworkEnum } from "../../models/enums/framework.enum";
import { DatabaseEnum } from "../../models/enums/database.enum";

export class AppUserValidator {
    validateDTO(appUserDTO: AppUserDTO): AppUserDTO {
        const appUserSchemaDTO = z.object({
            name: z.string().min(1).max(255),
            email: z.email(),
            password: z.string(),
            cpf: z.string(),
            role: z.enum(RoleEnum),
            stack: z.object({
                langs: z.array(z.enum(LangEnum)),
                frameworks: z.array(z.enum(FrameworkEnum)),
                databases: z.array(z.enum(DatabaseEnum))
            }).strict()
        }).strict();

        const validation = appUserSchemaDTO.safeParse(appUserDTO);

        if(!validation.success) {
            throw validation.error.message;
        }
        
        return appUserDTO;
    }
}
import { z } from "zod";
import { UserStack } from "../../crud/models/stack/entity/user-stack.entity";
import { AppUserDTO } from "../../crud/dtos/app-user.dto";
import { RoleEnum, ZodRoleEnum } from "../../crud/models/user/enums/role.enum";
import { LangEnum } from "../../crud/models/stack/enums/lang.enum";
import { FrameworkEnum } from "../../crud/models/stack/enums/framework.enum";
import { DatabaseEnum } from "../../crud/models/stack/enums/database.enum";

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
/*
    {
        "name": "your-beautiful-name",
        "email": "your-amazing-email",
        "password": "your-super-secret-password",
        "cpf": "your-greatest-and-unique-cpf",
        "role": "your-not-bossy-role" (optional key; values = USER, ADMIN; default = USER),
        "stack": {
            "langs": [PYTHON, C... OBJECTIVEC],
            "frameworks": [REACT, VUE... DOTNET],
            "databases":[POSTGRES, MYSQL... MICROSOFTSQLSERVER]
        }
    }
*/

import { AppUserDTO } from "../dtos/app-user.dto";
import { AppUser } from "../models/user/entity/app-user.entity";
import { Request } from "express";
import { RoleEnum } from "../models/user/enums/role.enum";
import { UserStackMapper } from "./user-stack.mapper";
import { AppUserValidator } from "../../middlewares/validation/app-user.validator";

export class AppUserMapper {

    userStackMapper: UserStackMapper = new UserStackMapper();

    appUserValidator: AppUserValidator = new AppUserValidator();

    reqToEntity(appUserData: Request<{}, {}, AppUserDTO>): AppUser {
        try {
            const {name, email, password, cpf, role, stack} = this.appUserValidator.validateDTO(appUserData.body);
            return new AppUser(name, email, password, cpf, role.toUpperCase() as RoleEnum, this.userStackMapper.reqToEntity(stack));
        } catch (error) {
            throw error;;
        }
    }
}
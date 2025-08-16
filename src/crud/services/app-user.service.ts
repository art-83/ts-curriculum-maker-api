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

import { Request } from "express";
import { AppUserDTO } from "../dtos/app-user.dto";
import { AppUser } from "../models/user/entity/app-user.entity";
import { appUserRepository } from "../datasource/data-source.config";
import { AppUserMapper } from "../mappers/app-user.mapper";

export class AppUserService {
    appUserMapper: AppUserMapper = new AppUserMapper();

    async createUser(appUserRequest: Request<{}, {}, AppUserDTO>): Promise <AppUser> {
        try {
            const userEntity = this.appUserMapper.reqToEntity(appUserRequest)
            await appUserRepository.save(userEntity);
            return userEntity;
        } catch (error) {
            throw error;
        }
    }
}
import { RoleEnum } from "../models/enums/user-role.enum";

export interface AppUserCredentialsDTO{
    email: string;
    password: string;
    cpf: string;
    role: RoleEnum;
}
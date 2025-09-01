import { RoleEnum } from "../models/enums/user-role.enum";

export interface AppUserCredentialsType {
    email: string;
    password: string;
    cpf: string;
    role: RoleEnum;
}
import { RoleEnum } from "../models/enums/role.enum";
import { UserStackDTO } from "./user-stack.dto";

export interface AppUserDTO{
    name: string;
    email: string;
    password: string;
    cpf: string;
    role: RoleEnum;
    stack: UserStackDTO;
}
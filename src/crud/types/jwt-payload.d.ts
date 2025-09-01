import { RoleEnum } from "../models/enums/user-role.enum";

export interface JwtPayload {
    id: string,
    role: RoleEnum
}
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RoleEnum } from "../enums/user-role.enum";
import { AppUserData } from "./app-user-data.entity";

@Entity({name: "app_user_credentials"})
export class AppUserCredentials {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ unique: true })
    cpf: string;

    @Column({ default: RoleEnum.USER, type: "text" })
    role: RoleEnum;
    
    @Column({ name: "created_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;

    @OneToOne(() => AppUserData, appUserData => appUserData.appUserCredentials)
    appUserData: AppUserData;

    constructor(email: string, password: string, cpf: string, role: RoleEnum) {
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.role = role;
    }
}
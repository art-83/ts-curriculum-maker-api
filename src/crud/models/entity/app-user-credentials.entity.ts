import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RoleEnum } from "../enums/user-role.enum";
import { AppUserData } from "./app-user-data.entity";

@Entity({name: "app_user_credentials"})
export class AppUserCredentials {

    @PrimaryGeneratedColumn("uuid")
    private id: string;

    @Column({ unique: true })
    private email: string;

    @Column()
    private password: string;

    @Column({ unique: true })
    private cpf: string;

    @Column({ default: RoleEnum.USER, type: "text" })
    private role: RoleEnum;
    
    @Column({ name: "created_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    private createdAt: Date;

    @OneToOne(() => AppUserData, appUserData => appUserData)
    private appUserData: AppUserData;

    constructor(email: string, password: string, cpf: string, role: RoleEnum) {
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.role = role;
    }
}
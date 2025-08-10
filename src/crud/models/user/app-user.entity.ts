import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RoleEnum } from "./enums/role.enum";
import { UserStack } from "../stack/user-stack.entity";

@Entity()
export class AppUser {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({unique: true})
    cpf: string;

    @Column({default: RoleEnum.USER, type: "text"})
    role: RoleEnum;

    @OneToOne(() => UserStack, stack => stack.user, {cascade: true})
    stack: UserStack;
}
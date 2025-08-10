import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { LangEnum } from "./enums/lang.enum";
import { FrameworkEnum } from "./enums/framework.enum";
import { DatabaseEnum } from "./enums/database.enum";
import { AppUser } from "../user/app-user.entity";

@Entity()
export class UserStack {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToOne(() => AppUser, appuser => appuser.stack)
    @JoinColumn({name: "user_id"})
    user: AppUser;

    @Column({
        type: "text",
        array: true,
        nullable: true
    })
    langs: LangEnum[];

    @Column({
        type: "text",
        array: true,
        nullable: true
    })
    frameworks: FrameworkEnum[];

    @Column({
        type:"text",
        array: true,
        nullable: true
    })
    databases: DatabaseEnum[];
}
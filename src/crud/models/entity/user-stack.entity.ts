import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppUser } from "./app-user.entity";
import { DatabaseEnum } from "../enums/database.enum";
import { FrameworkEnum } from "../enums/framework.enum";
import { LangEnum } from "../enums/lang.enum";

@Entity()
export class UserStack {

    @PrimaryGeneratedColumn("uuid")
    id: string;

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


    @OneToOne(() => AppUser, appuser => appuser.stack)
    @JoinColumn({name: "user_id"})
    user: AppUser;

    constructor(langs: LangEnum[], frameworks: FrameworkEnum[], databases: DatabaseEnum[]) {
        this.langs = langs;
        this.frameworks = frameworks;
        this.databases = databases;
    }
}
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppUserData } from "./app-user-data.entity";
import { DatabaseEnum } from "../enums/stack-database.enum";
import { FrameworkEnum } from "../enums/stack-framework.enum";
import { LangEnum } from "../enums/stack-lang.enum";

@Entity({name: "app_user_stack"})
export class AppUserStack {

    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @OneToOne(() => AppUserData, appUserData => appUserData.stack)
    @JoinColumn({name: "app_user_data_id"})
    appUserData: AppUserData;

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

    constructor(langs: LangEnum[], frameworks: FrameworkEnum[], databases: DatabaseEnum[]) {
        this.langs = langs;
        this.frameworks = frameworks;
        this.databases = databases;
    }
}
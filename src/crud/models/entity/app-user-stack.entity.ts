import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppUserData } from "./app-user-data.entity";
import { DatabaseEnum } from "../enums/stack-database.enum";
import { FrameworkEnum } from "../enums/stack-framework.enum";
import { LangEnum } from "../enums/stack-lang.enum";

@Entity({name: "app_user_stack"})
export class AppUserStack {

    @PrimaryGeneratedColumn("uuid")
    private id: string;
    
    @OneToOne(() => AppUserData, appUserData => appUserData.stack)
    @JoinColumn({name: "app_user_data_id"})
    private appUserData: AppUserData;

    @Column({
        type: "text",
        array: true,
        nullable: true
    })
    private langs: LangEnum[];

    @Column({
        type: "text",
        array: true,
        nullable: true
    })
    private frameworks: FrameworkEnum[];

    @Column({
        type:"text",
        array: true,
        nullable: true
    })
    private databases: DatabaseEnum[];

    constructor(langs: LangEnum[], frameworks: FrameworkEnum[], databases: DatabaseEnum[]) {
        this.langs = langs;
        this.frameworks = frameworks;
        this.databases = databases;
    }
}
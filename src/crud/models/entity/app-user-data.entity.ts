import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppUserStack } from "./app-user-stack.entity"
import { SeniorityEnum } from "../enums/user-data-seniority.enum";
import { AppUserCredentials } from "./app-user-credentials.entity";

@Entity({name: "app_user_data"})
export class AppUserData {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToOne(() => AppUserCredentials, appUserCredentials => appUserCredentials.appUserData)
    @JoinColumn({name: "user_id"})
    appUserCredentials: AppUserCredentials;

    @Column({ name: "full_name" })
    fullName: string;

    @Column({type: "date"})
    birthday: Date;

    @Column({ name: "contact_email", unique: true })
    contactEmail: string;

    @Column()
    github: string;

    @Column()
    linkedin: string;

    @Column({ nullable: true })
    university: string;

    @Column({name: "university_finished_at", nullable: true})
    universityFinishedAt: number;

    @Column({ type: "text", nullable: true })
    seniority: SeniorityEnum;

    @OneToOne(() => AppUserStack, appUserStack => appUserStack.appUserData, { cascade: true })
    stack: AppUserStack;

    constructor(fullname: string, contactEmail: string, github: string, linkedin: string, university: string, universityFinishedAt: number, seniority: SeniorityEnum) {
        this.fullName = fullname;
        this.contactEmail = contactEmail;
        this.github = github;
        this.linkedin = linkedin;
        this.university = university;
        this.universityFinishedAt = universityFinishedAt;
        this.seniority = seniority;
    }
}
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
    private appUserCredentials: AppUserCredentials;

    @Column({ name: "full_name" })
    private fullName: string;

    @Column({type: "date"})
    private birthday: Date;

    @Column({ name: "contact_email", unique: true })
    private contactEmail: string;

    @Column()
    private github: string;

    @Column()
    private linkedin: string;

    @Column({ nullable: true })
    private university: string;

    @Column({name: "university_finished_at", nullable: true})
    private universityFinishedAt: number;

    @Column({ type: "text", nullable: true })
    private seniority: SeniorityEnum;

    @OneToOne(() => AppUserStack, appUserStack => appUserStack.appUserData, { cascade: true })
    private stack: AppUserStack;

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
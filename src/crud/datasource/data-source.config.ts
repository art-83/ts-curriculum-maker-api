import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { UserStack } from "../models/entity/user-stack.entity";
import { AppUser } from "../models/entity/app-user.entity";

dotenv.config();

export const myDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATASOURCE_HOST,
    username: process.env.DATASOURCE_USERNAME,
    database: process.env.DATASOURCE_DATABASE,
    entities: [AppUser, UserStack],
    synchronize: true,
    dropSchema: true
});

export const appUserRepository = myDataSource.getRepository(AppUser);
export const userStackRepository = myDataSource.getRepository(UserStack);
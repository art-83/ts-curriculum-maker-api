import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { AppUserStack } from "../models/entity/app-user-stack.entity";
import { AppUserData } from "../models/entity/app-user-data.entity";
import { AppUserCredentials } from "../models/entity/app-user-credentials.entity";

dotenv.config();

export const myDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATASOURCE_HOST,
    username: process.env.DATASOURCE_USERNAME,
    database: process.env.DATASOURCE_DATABASE,
    entities: [AppUserCredentials, AppUserData, AppUserStack],
    synchronize: true,
    dropSchema: true
});

export const appUserCredentialsRepository = myDataSource.getRepository(AppUserCredentials);
export const appUserRepository = myDataSource.getRepository(AppUserData);
export const userStackRepository = myDataSource.getRepository(AppUserStack);
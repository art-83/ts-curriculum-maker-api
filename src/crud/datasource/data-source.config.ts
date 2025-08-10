import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { UserStack } from "../models/stack/user-stack.entity";
import { AppUser } from "../models/user/app-user.entity";

dotenv.config();

export class MyDataSource {
    constructor () {
        return new DataSource({
        type: "postgres",
        host: process.env.DATASOURCE_HOST,
        username: process.env.DATASOURCE_USERNAME,
        database: process.env.DATASOURCE_DATABASE,
        entities: [AppUser, UserStack],
        synchronize: true,
        dropSchema: true
    })
}};
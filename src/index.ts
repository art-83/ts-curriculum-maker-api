import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { myDataSource } from "./crud/datasource/data-source.config";
import appUserRoutes from "./crud/routes/app-user.route";

dotenv.config;

myDataSource.initialize();

const app = express();

app.use(express.json());

app.use("/user", appUserRoutes);

app.listen(process.env.SERVER_PORT, () => console.log(`http://localhost:${process.env.SERVER_PORT}`));
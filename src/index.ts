import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";

import { MyDataSource } from "./crud/datasource/data-source.config";

dotenv.config;

const app = express();
app.use(express.json());

const myDataSource = new MyDataSource();
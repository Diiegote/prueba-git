import express from "express";
import { json } from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import { router } from "./routes/index.js";

export const app = express();

app.use(json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use(router);


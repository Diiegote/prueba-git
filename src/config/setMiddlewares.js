import { json } from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser';

export const setApp = (app) => {
   app.use(json());
   app.use(morgan("dev"));
   app.use(cookieParser());
};
import express from "express";
import { router } from "./routes/index.js";
import { setApp } from "./config/setMiddlewares.js";

export const app = express();
setApp(app);
app.use(router);


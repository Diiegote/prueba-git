import { Router } from "express";
import { getPrueba } from '../controllers/index.js';

export const router = Router();

router.get("/prueba", getPrueba);
import { Router } from "express";
import { getPrueba, postPrueba } from '../controllers/index.js';

export const router = Router();

router.get("/prueba", getPrueba);
router.post("/prueba", postPrueba);
import { getPruebaService } from "../services/index.js"

export const getPrueba = async (req, res) => {
   const respuesta = await getPruebaService();
   res.status(201).json(respuesta);
};
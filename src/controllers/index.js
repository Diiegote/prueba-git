import { getPruebaService, postPruebaService } from "../services/index.js"

export const getPrueba = async (req, res) => {
   const respuesta = await getPruebaService();
   res.status(201).json(respuesta);
};

export const postPrueba = async (req, res) => {
   const respuesta = await postPruebaService(req.body);
   res.status(201).json(respuesta);
};
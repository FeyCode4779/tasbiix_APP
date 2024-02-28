import express  from "express";
import { createTasbiix, deleteTasbiix, readAllTasbiix, updateTasbiix } from "../controllers/tasbiixControllers.js";


const tasbiixRoutes = express.Router();

tasbiixRoutes.route('/').get(readAllTasbiix).post(createTasbiix);
tasbiixRoutes.route('/:id').put(updateTasbiix).delete(deleteTasbiix);

export default tasbiixRoutes;
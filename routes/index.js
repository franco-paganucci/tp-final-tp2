import { Router } from "express";
import productsRoutes from "./productsRoutes.js";
import userRoutes from "./usersRoutes.js";

const routes = Router();

routes.use("/products", productsRoutes);
routes.use("/users", userRoutes);


export default routes;

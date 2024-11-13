import { Router } from "express";
import productsRoutes from "./productsRoutes.js";
import userRoutes from "./userRoutes.js";
import orderRoutes from "./orderRoutes.js";
import orderItemsRoutes from "./orderItemsRoutes.js";

const routes = Router();

routes.use("/products", productsRoutes);
routes.use("/users", userRoutes);
routes.use("/orders", orderRoutes);
routes.use("/orderitems", orderItemsRoutes);


export default routes;

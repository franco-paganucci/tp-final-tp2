import { Router } from "express";
import productsRoutes from "./productsRoutes.js";
import userRoutes from "./userRoutes.js";
import orderRoutes from "./orderRoutes.js";
import orderItemsRoutes from "./orderItemsRoutes.js";
import roleRoutes from "./roleRoutes.js";

const routes = Router();

routes.use("/products", productsRoutes);
routes.use("/users", userRoutes);
routes.use("/orders", orderRoutes);
routes.use("/orderitems", orderItemsRoutes);
routes.use("/roles", roleRoutes);


export default routes;

import { Router } from "express";
import ProductController from "../controllers/ProductController.js";
import validateToken from "../middlewares/jwtGuard.js";
import adminOrEmployeesOnly from "../middlewares/adminOrEmployeesOnly.js";

const productsRoutes = Router();

const controller = new ProductController();

productsRoutes.get("/", validateToken, controller.getAllProducts);
productsRoutes.get("/:id", validateToken, controller.getProductById);
productsRoutes.post("/", validateToken, adminOrEmployeesOnly, controller.createProduct);
productsRoutes.put("/:id", validateToken, adminOrEmployeesOnly, controller.updateProduct);
productsRoutes.delete("/:id", validateToken, adminOrEmployeesOnly, controller.deleteProduct);

export default productsRoutes;

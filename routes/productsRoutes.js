import { Router } from "express";
import ProductController from "../controllers/ProductController.js";

const productsRoutes = Router();

const controller = new ProductController();

productsRoutes.get("/",  controller.getAllProducts);
productsRoutes.get("/:id", controller.getProductById);
productsRoutes.post("/", controller.createProduct);
productsRoutes.put("/:id", controller.updateProduct);
productsRoutes.delete("/:id", controller.deleteProduct);

export default productsRoutes;

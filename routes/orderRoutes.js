import { Router } from "express";
import OrderController from "../controllers/OrderController.js";

const ordersRoutes = Router();

const controller = new OrderController();

ordersRoutes.get("/",  controller.getAllOrders);
ordersRoutes.get("/:id", controller.getOrderById);
ordersRoutes.post("/", controller.createOrder);
ordersRoutes.put("/:id", controller.updateOrder);
ordersRoutes.delete("/:id", controller.deleteOrder);

export default ordersRoutes;

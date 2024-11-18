import { Router } from "express";
import OrderController from "../controllers/OrderController.js";
import validateToken from "../middlewares/jwtGuard.js";

const ordersRoutes = Router();

const controller = new OrderController();

ordersRoutes.get("/", validateToken,  controller.getAllOrders);
ordersRoutes.get("/:id", validateToken, controller.getOrderById);
ordersRoutes.post("/", validateToken, controller.createOrder);
ordersRoutes.put("/:id", validateToken, controller.updateOrder);
ordersRoutes.delete("/:id", validateToken, controller.deleteOrder);

export default ordersRoutes;

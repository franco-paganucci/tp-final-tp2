import { Router } from "express";
import OrderItemController from "../controllers/OrderItemController.js";
import validateToken from "../middlewares/jwtGuard.js";

const orderItemsRoutes = Router();

const controller = new OrderItemController();

orderItemsRoutes.get("/", validateToken,  controller.getAllOrderItems);
orderItemsRoutes.get("/:id", validateToken, controller.getOrderItemById);
orderItemsRoutes.post("/", validateToken, controller.createOrderItem);
orderItemsRoutes.put("/:id", validateToken, controller.updateOrderItem);
orderItemsRoutes.delete("/:id", validateToken, controller.deleteOrderItem);

export default orderItemsRoutes;

import { Router } from "express";
import OrderItemController from "../controllers/OrderItemController.js";

const orderItemsRoutes = Router();

const controller = new OrderItemController();

orderItemsRoutes.get("/",  controller.getAllOrderItems);
orderItemsRoutes.get("/:id", controller.getOrderItemById);
orderItemsRoutes.post("/", controller.createOrderItem);
orderItemsRoutes.put("/:id", controller.updateOrderItem);
orderItemsRoutes.delete("/:id", controller.deleteOrderItem);

export default orderItemsRoutes;

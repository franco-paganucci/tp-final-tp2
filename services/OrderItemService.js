import { OrderItem } from "../models/models.js";

class OrderItemService {

  getAllOrderItems = async () => {
    try {
      const orders = await OrderItem.findAll({
        attributes: ["id", "price", "orderId", "productId", "quantity"]
      });
      return orders;
    } catch (error) {
      throw error;
    }
  };
  getOrderItemById = async (id) => {
    try {
      const orders = await OrderItem.findAll({
        where: { id },
        attributes: ["id", "price", "orderId", "productId", "quantity"]
      });
      return orders;
    } catch (error) {
      throw error;
    }
  };

  createOrderItem = async (orderItem) => {
    try {
      const newOrder = await OrderItem.create(orderItem);
      return newOrder;
    } catch (error) {
      throw error;
    }
  };
  updateOrderItem = async (data) => {
    try {
      const { id, state } = data;
      const orderItem = await OrderItem.update(
        { state },
        {
          where: { id },
        }
      );
      return orderItem;
    } catch (error) {
      throw error;
    }
  };

  deleteOrderItem = async (id) => {
    throw new Error("No se puede realizar esta acción");
    // try {
    //     const order = await OrderItem.update(
    //       { state: 'cancel' },
    //       {
    //         where: { id },
    //       }
    //     );
    //     return order;
    //   } catch (error) {
    //     throw error;
    //   }
  };
}

export default OrderItemService;

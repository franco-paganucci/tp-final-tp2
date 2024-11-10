import { Order } from "../models/models.js";

class OrderService {

  getAllOrders = async () => {
    try {
      const orders = await Order.findAll({
        attributes: ["id", "price", "state"]
      });
      return orders;
    } catch (error) {
      throw error;
    }
  };
  getOrderById = async (id) => {
    try {
      const orders = await Order.findAll({
        where: { id },
        attributes: ["id", "price", "state"],
      });
      return orders;
    } catch (error) {
      throw error;
    }
  };

  createOrder = async (order) => {
    try {
      const newOrder = await Order.create(order);
      return newOrder;
    } catch (error) {
      throw error;
    }
  };
  updateOrder = async (data) => {
    try {
      const { id, state } = data;
      const order = await Order.update(
        { state },
        {
          where: { id },
        }
      );
      return order;
    } catch (error) {
      throw error;
    }
  };

  deleteOrder = async (id) => {
    try {
        const order = await Order.update(
          { state: 'cancel' },
          {
            where: { id },
          }
        );
        return order;
      } catch (error) {
        throw error;
      }
  };
}

export default OrderService;

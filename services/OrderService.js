import { ROLES } from "../constants/contants.js";
import { Order, OrderItem } from "../models/models.js";

class OrderService {

  getAllOrders = async (userId, roleId) => {
    const filter = roleId === ROLES.CLIENT ? { userId } : {};
    try {
      const orders = await Order.findAll({
        where: filter,
        attributes: ["id", "price", "state"]
      });
      return orders;
    } catch (error) {
      throw error;
    }
  };

  getOrdersByUserId = async (userId, roleId) => {
    try {
      const filter = roleId === ROLES.CLIENT ? { userId } : {};
        const orders = await Order.findAll({
            where: filter,
            attributes: ["id", "userId", "state", "price"],
        });
        return orders;
    } catch (error) {
        throw error;
    }
};

  getOrderById = async (id, userId, roleId) => {
    const filter = roleId === ROLES.CLIENT ? { userId, id } : { id };
    try {
      const orders = await Order.findAll({
        where: filter,
        attributes: ["id", "price", "state"],
        include: { model: OrderItem }
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

  deleteOrder = async (id, userId, roleId) => {
    const filter = roleId === ROLES.CLIENT ? { userId, id } : { id }
    try {
        const order = await Order.update(
          { state: 5 },
          {
            where: filter
          }
        );
        return order;
      } catch (error) {
        throw error;
      }
  };
}

export default OrderService;

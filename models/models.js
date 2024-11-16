import Role from "./Role.js";
import User from "./User.js";
import Product from "./Product.js";
import Order from "./Order.js";
import OrderItem from "./OrderItem.js";

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' })
Order.hasMany(OrderItem, {
    foreignKey: 'orderId',
    onDelete: 'CASCADE',
});

OrderItem.belongsTo(Order, { foreignKey: 'orderId' })
OrderItem.belongsTo(Product, { foreignKey: 'productId'})
Product.hasMany(OrderItem, { foreignKey: 'productId' })

Role.hasMany(User, { foreignKey: "roleId", as: "users" });
User.belongsTo(Role, { foreignKey: "roleId", as: "role" });

const updateOrderPrice = async (orderItem, options) => {
    try {
      const order = await Order.findByPk(orderItem.orderId);
      if (order) {
        const orderItems = await order.getOrderItems();
        const total = orderItems.reduce((acc, item) => { return acc + item.price; }, 0);
        order.price = total;
        await order.save()
      } else {
        throw new Error('Order not found');
      }
    } catch (error) {
      console.error('Error calculating price for Order:', error);
    }
}

const setOrderItemPrice = async (orderItem, options) => {
    try {
      const product = await Product.findByPk(orderItem.productId);
      if (product) {
        orderItem.price = product.price * orderItem.quantity;
      } else {
        throw new Error('Product not found');
      }
    } catch (error) {
      console.error('Error calculating price for OrderItem:', error);
    }
}

OrderItem.addHook('beforeCreate', setOrderItemPrice);

OrderItem.addHook('afterCreate', updateOrderPrice);

export { Product, User, Order, OrderItem, Role }




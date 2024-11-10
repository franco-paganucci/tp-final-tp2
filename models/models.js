// import Role from "./Role.js";
import User from "./User.js";
import Product from "./Product.js";
import Order from "./Order.js";
import OrderItem from "./OrderItem.js";

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' })
Order.hasMany(OrderItem, {
    foreignKey: 'orderId',  // Aquí defines la clave foránea en camelCase
    onDelete: 'CASCADE',
  });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' })
OrderItem.belongsTo(Product, { foreignKey: 'productId'})
Product.hasMany(OrderItem, { foreignKey: 'productId' })

// Order.addHook('afterSave', async (order) => {
//     const totalPrice = await OrderItem.sum('price', {
//       where: { orderId: order.id },
//     });
  
//     order.price = totalPrice || 0.00;
//     await order.save();
// });

// export {Role, User}
export { Product, User, Order, OrderItem }




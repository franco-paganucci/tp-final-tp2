// import Role from "./Role.js";
import User from "./User.js";
import Product from "./Product.js";
import Order from "./Order.js";
import OrderItem from "./OrderItem.js";

User.hasMany(Order);
Order.belongsTo(User)
Order.hasMany(OrderItem)
OrderItem.belongsTo(Order)
OrderItem.hasMany(Product)

// Order.addHook('afterSave', async (order) => {
//     const totalPrice = await OrderItem.sum('price', {
//       where: { orderId: order.id },
//     });
  
//     order.price = totalPrice || 0.00;
//     await order.save();
// });

// export {Role, User}
export { Product, User, Order, OrderItem }




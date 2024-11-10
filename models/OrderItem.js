import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class OrderItem extends Model {}

OrderItem.init(
  {
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  },
  {
    sequelize: connection,
    modelName: "OrderItem",
  },
  
);

export default OrderItem;
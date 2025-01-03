import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Order extends Model {
    getTotalPrice() {
        return this.totalPrice;
    }
}

Order.init(
  {
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },
  {
    sequelize: connection,
    modelName: "Order",
  }
);

export default Order;
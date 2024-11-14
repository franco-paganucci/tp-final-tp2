import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class OrderState extends Model {
    getTotalPrice() {
        return this.totalPrice;
    }
}

OrderState.init(
  {
    state: {
      type: DataTypes.STRING,
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
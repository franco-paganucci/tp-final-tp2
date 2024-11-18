import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class OrderState extends Model {
    getTotalPrice() {
        return this.totalPrice;
    }
}

OrderState.init(
  {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize: connection,
    modelName: "OrderState",
  }
);

export default OrderState;
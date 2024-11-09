import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection";
import bcrypt from "bcrypt";

class User extends Model {
    compare = async (myPlaintextPassword) => {
        const data = await bcrypt.compare(myPlaintextPassword, this.pass);
        return data
      };
};

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER, // es un integer o un UUID?
      allowNull: true,
    },
    salt: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.salt = salt;
    const hash = await bcrypt.hash(user.pass, salt);
    user.pass = hash;
  });

export default User;

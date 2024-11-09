import User from "../models/User.js";

class UserService {

    loginService = async (user) => {
        try {
            const {mail, pass} = user;

            const userLogin = await User.findOne({ where: { mail } });
            if (!userLogin) throw new Error(`User with email ${mail} not found`);
            
            const comparePassword = await userLogin.compare(password);
            if(!comparePassword) throw new Error(`Wrong Password.`);

            return userLogin;
        } catch (error) {
            throw error;
        }
    }


  getAllUsers = async () => {
    try {
      const users = await User.findAll({
        attributes: ["name", "mail", "address"],
      });
      return users;
    } catch (error) {
      throw error;
    }
  };

  getUserById = async (id) => {
    try {
      const user = await User.findOne({
        where: { id: id },
        attributes: ["name", "mail", "address"],
      });
      return user;
    } catch (error) {
      throw error;
    }
  };

  createUser = async (user) => {
    try {
        const newUser = await User.create(user);
        return newUser;
    } catch (error) {
        throw error;
    }
  };

  updateUser = async (data) => {
    try {
        const { id, name, password, email, address } = data;
        const updatedUser = await User.update(
            { name, password, email, address },
            { where: { id } }
        );
        return updatedUser;
    } catch (error) {
        throw error;
    }
  };

  // implementar soft deletes ? Necesitaríamos una columna deleted_at
  deleteUser = async (id) => {
    return `deleteUserService ${id}`;
  }
}

export default UserService;

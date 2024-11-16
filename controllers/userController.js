import userService from "../services/UserService.js";

class UserController {
  userService = new userService();

  getAllUsers = async (req, res) => {
    try {
      const data = await this.userService.getAllUsers();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getUserById = async (req, res) => {
    try {
      const { Id } = req.params;
      const data = await this.userService.getUserById(Id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createUser = async (req, res) => {
    try {
      const { name, password, mail, address } = req.body;
      const data = await this.userService.createUser({
        name,
        password,
        mail,
        address,
      });
      res.status(201).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateUser = async (req, res) => {
    try {
      const { Id } = req.params;
      const { name, mail, password, address } = req.body;
      const data = await this.userService.updateUser({
        Id,
        name,
        mail,
        password,
        address,
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.userService.deleteUser(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default UserController;

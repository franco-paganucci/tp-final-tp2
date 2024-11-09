import userService from "../services/userService.js"

class UserController {
    userService = new userService()

    getAllUsers = async (req, res) => {
        try {
            const data = await this.userService.getAllUsersService()
            res.status(200).send({success: true, message: data})
        } catch (error) {
            res.status(200).send({success: false, message: error.message})
        }
    }

    getUserById = async (req, res) => {
        try {
            const {Id} = req.params
            const data = await this.userService.getUserByIdService(Id)
            res.status(200).send({success: true, message: data})
        } catch (error) {
            res.status(200).send({success: false, message: error.message})
        }
    }

    createUser = async (req, res) => {
        try {
            const {name, password, email, direccion} = req.body
            const data = await this.userService.createUserService({name, password, email, direccion})
            res.status(200).send({success: true, message: data})
        } catch (error) {
            res.status(200).send({success: false, message: error.message})
        }
    }

    updateUser = async (req, res) => {
        try {
            const {Id} = req.params
            const {name, mail, password, direccion} = req.body 
            const data = await this.userService.updateUserService({Id, name, mail, password, direccion})
            res.status(200).send({success: true, message: data})
        } catch (error) {
            res.status(200).send({success: false, message: error.message})
        }
    }

    deleteUser = async (req, res) => {
        try {
            const {Id} = req.params
            const data = await this.userService.deleteUserService(Id)
            res.status(200).send({success: true, message: data})
        } catch (error) {
            res.status(200).send({success: false, message: error.message})
        }
    }
}

export default UserController
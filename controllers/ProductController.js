import { ROLES } from "../constants/contants.js";
import ProductService from "../services/ProductService.js";
class ProductController {

    service = new ProductService();

    getAllProducts = async (req, res) => {
        try {
            // const {role} = req.user 
            //esto debe salir del jwt y para el get hay que filtrar para traer solo los activos si el user es cliente
        // se saca del jwt y se hace rol === ROLES.ADMIN || rol === ROLES.EMPLOYEE? ... : ... la constante roles ya esta importada
            const role = [ROLES.ADMIN] // aca toma el valor de la key y mno del value
            const data = await this.service.getAllProducts(role);
            res.status(200).send({ success: true, message: data });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };

    getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await this.service.getProductById(id);
        res.status(200).send({ success: true, message: data });
    } catch (error) {
        res.status(400).send({ success: false, message: error.message });
    }
    };

    createProduct = async (req, res) => {
        try {
            const { name, price, stock, description, image } = req.body;
            const data = await this.service.createProduct({
            name,
            price,
            stock,
            description,
            image,
            active: true
            });
            res.status(200).send({ success: true, message: data });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    };

    updateProduct = async (req, res) => {
        try {
            const { name, price, stock, image} = req.body;
            const { id } = req.params;
            const data = await this.service.updateProduct({id, name, price, stock, image});
            res.status(200).send({ success: true, message: data });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };

    deleteProduct = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await this.service.deleteProduct(id);
            res.status(200).send({ success: true, message: data });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };

}

export default ProductController
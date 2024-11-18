import OrderService from "../services/OrderService.js";
class OrderController {

    service = new OrderService();

    getAllOrders = async (req, res) => {
        try {
        const data = await this.service.getAllOrders();
        res.status(200).send({ success: true, message: data });
        } catch (error) {
        res.status(400).send({ success: false, message: error.message });
        }
    };

    getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await this.service.getOrderById(id);
        res.status(200).send({ success: true, message: data });
    } catch (error) {
        res.status(400).send({ success: false, message: error.message });
    }
    };

    createOrder = async (req, res) => {
        try {
            const { userId, } = req.body;
            const data = await this.service.createOrder({
                userId, state: 1, price: 0
            });
            res.status(200).send({ success: true, message: data });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    };

    updateOrder = async (req, res) => {
        try {
            const { state } = req.body;
            const { id } = req.params;
            const data = await this.service.updateOrder({ state, id});
            res.status(200).send({ success: true, message: data });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };

    deleteOrder = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await this.service.deleteOrder(id);
            res.status(200).send({ success: true, message: data });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };

}

export default OrderController
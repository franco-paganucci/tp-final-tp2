import OrderItemService from "../services/OrderItemService.js";
class OrderItemController {

    service = new OrderItemService();

    getAllOrderItems = async (req, res) => {
        try {
        const data = await this.service.getAllOrderItems();
        res.status(200).send({ success: true, message: data });
        } catch (error) {
        res.status(400).send({ success: false, message: error.message });
        }
    };

    getOrderItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await this.service.getOrderItemById(id);
        res.status(200).send({ success: true, message: data });
    } catch (error) {
        res.status(400).send({ success: false, message: error.message });
    }
    };

    createOrderItem = async (req, res) => {
        try {
            const { orderId, quantity = 1, productId, price = 0.0 } = req.body;
            const data = await this.service.createOrderItem({
                orderId, quantity, productId, price
            });
            res.status(200).send({ success: true, message: data });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    };

    updateOrderItem = async (req, res) => {
        try {
            const { quantity } = req.body;
            const { id } = req.params;
            const data = await this.service.updateOrderItem({ quantity, id});
            res.status(200).send({ success: true, message: data });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };

    deleteOrderItem = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await this.service.deleteOrderItem(id);
            res.status(200).send({ success: true, message: data });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };

}

export default OrderItemController
import ProductService from "../services/ProductService.js";
class ProductController {
    service = new ProductService();

    getAllProducts = async (req, res) => {
        const data = await this.service.getAllProducts();
        res.status(200).send({ success: true, message: data });
    // try {
    //   const data = await this.service.getAllProducts();
    //   res.status(200).send({ success: true, message: data });
    // } catch (error) {
    //   res.status(400).send({ success: false, message: error.message });
    // }
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
      const { name, price, stock, id } = req.body;
      const data = await this.service.createProduct({
        name,
        price,
        stock,
        id
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateProduct = async (req, res) => {
    try {
      const { name, price, stock} = req.body;
      const { id } = req.params;
      const data = await this.service.updateProduct({id, name, price, stock});
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
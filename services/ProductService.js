import { Product } from "../models/models.js";

class ProductService {

  getAllProducts = async () => {
    try {
      const products = await Product.findAll({
        attributes: ["id", "name", "price", "description", "stock", "image"]
      });
      return products;
    } catch (error) {
      throw error;
    }
  };
  getProductById = async (id) => {
    try {
      const products = await Product.findAll({
        where: { id },
        attributes: ["id", "name", "price", "description", "stock", "image"],
      });
      return products;
    } catch (error) {
      throw error;
    }
  };

  createProduct = async (product) => {
    try {
      const newProduct = await Product.create(product);
      return newProduct;
    } catch (error) {
      throw error;
    }
  };
  updateProduct = async (data) => {
    try {
      const { stock, price, description, name, id, image } = data;
      const products = await Product.update(
        { stock, price, description, name, image },
        {
          where: { id },
        }
      );
      return products;
    } catch (error) {
      throw error;
    }
  };

  deleteProduct = async (id) => {
    try {
        const products = await Product.update(
          { active: false },
          {
            where: { id },
          }
        );
        return products;
      } catch (error) {
        throw error;
      }
  };
}

export default ProductService;

import { Product } from "../models/models.js";

class ProductService {

  getAllProducts = async (role) => {
    try {
      const filter = role === "ADMIN" || role === "EMPLOYEE" ? {} : { active: true };
      
      const products = await Product.findAll({
        attributes: ["id", "name", "price", "description", "stock", "image", "active"],
        where: filter,
      });
  
      return products;
    } catch (error) {
      throw error;
    }
  };
  
  getProductById = async (id, role) => {
    try {
      const filter = 
        role === "ADMIN" || role === "EMPLOYEE" 
          ? { id } 
          : { id, active: true };
  
      const product = await Product.findOne({
        where: filter,
        attributes: ["id", "name", "price", "description", "stock", "image", "active"],
      });
  
      if (!product) {
        throw new Error("Product not found or access restricted.");
      }
  
      return product;
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

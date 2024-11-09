// import { User } from "../models/models.js";

class ProductService {
    products = []
  getAllProducts = async () => {
    console.log(this.products);
    return this.products;
    // try {
    //   const users = await User.findAll({
    //     attributes: ["name", "mail"],
    //   });
    //   return users;
    // } catch (error) {
    //   throw error;
    // }
  };
  getProductById = async (id) => {
    return this.products.find((p) => Number(p.id) === Number(id))
    // try {
    //   const users = await User.findAll({
    //     where: { id },
    //     attributes: ["name", "mail"],
    //   });
    //   return users;
    // } catch (error) {
    //   throw error;
    // }
  };
//   loginService = async (user) => {
//     try {
//       const { mail, pass } = user;
//       const userLogin = await User.findOne({ where: { mail } });
//       if (!userLogin) throw new Error("No pasas");
//       const comparePass = await userLogin.compare(pass);
//       // console.log(
//       //   `🚀 ~ UserService ~ loginService= ~ comparePass:`,
//       //   comparePass
//       // );
//       if (!comparePass) throw new Error("No pasas");
//       return userLogin;
//     } catch (error) {
//       throw error;
//     }
//   };
  createProduct = async (product) => {
    this.products.push(product)
    return product;
    // try {
    //   const newUser = await User.create(user);
    //   return newUser;
    // } catch (error) {
    //   throw error;
    // }
  };
  updateProduct = async (data) => {
    const { id, ...props } = data;
    const findedProduct = this.products.find((p) => Number(p.id) === Number(id))
    const updatedProduct = {...findedProduct, ...props}
    this.products = this.products.filter((p) => Number(p.id) !== Number(id))
    this.products = [...this.products, updatedProduct]
    return updatedProduct;

    // try {
    //   const { id, name, pass, mail } = data;
    //   const users = await User.update(
    //     { name, pass, mail },
    //     {
    //       where: { id },
    //     }
    //   );
    //   return users;
    // } catch (error) {
    //   throw error;
    // }
  };

  deleteProduct = async (id) => {
    return `deleteProductService ${id}`;
  };
}

export default ProductService;

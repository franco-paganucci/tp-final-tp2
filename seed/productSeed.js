import { Product } from "../models/models.js";

async function productSeed() {
  try {
    await Product.bulkCreate([
      {
        name: "Hamburguesa El Desembarco",
        image: "",
        description: "Hamburguesa gourmet con carne de res, queso cheddar, bacon crujiente, lechuga, tomate y salsa especial.",
        price: 10000,
        stock: 50,
        active: true
      },
      {
        name: "La BBQ Bacon",
        image: "",
        description: "Carne de res, bacon, cebolla caramelizada, queso cheddar y salsa BBQ ahumada.",
        price: 12000,
        stock: 40,
        active: true
      },
      {
        name: "Pollo Crunch",
        image: "",
        description: "Pechuga de pollo empanada, mayonesa casera, lechuga, tomate y queso fresco.",
        price: 14000,
        stock: 60,
        active: true
      },
      {
        name: "Veggie Deluxe",
        image: "",
        description: "Hamburguesa vegetariana con quinoa, espinacas, cebolla morada, guacamole y mayonesa vegana.",
        price: 16000,
        stock: 30,
        active: true
      },
      {
        name: "El Doble Queso",
        image: "",
        description: "Doble carne de res, doble queso cheddar, cebolla caramelizada y salsa de mostaza y miel.",
        price: 18000,
        stock: 20,
        active: true
      },
      {
        name: "La Mexicana",
        image: "",
        description: "Carne de res, guacamole, jalapeños, cebolla morada, tomate y salsa picante.",
        price: 12000,
        stock: 25,
        active: true
      }
    ], {
      individualHooks: true 
    });

    console.log('Hamburguesas insertadas correctamente');
  } catch (error) {
    console.error("Error al insertar hamburguesas:", error);
  }
}

export default productSeed;
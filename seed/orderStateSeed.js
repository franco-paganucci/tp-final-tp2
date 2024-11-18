import { OrderState } from "../models/models.js"; // Asegúrate de que la ruta sea correcta

async function orderStateSeed() {
  try {
    // Insertar los estados de las órdenes
    await OrderState.bulkCreate([
      { description: 'En revisión' },
      { description: 'En preparación' },
      { description: 'En camino' },
      { description: 'Entregado' },
      { description: 'Cancelado' }
    ]);

    console.log('Estados de órdenes insertados correctamente');
  } catch (error) {
    console.error("Error al insertar estados de órdenes:", error);
  }
}

export default orderStateSeed;
import bcrypt from 'bcrypt';
import User from '../models/User.js';

async function userSeed() {
    // ver de modificar para generar los admin
  try {
    const users = [
      { name: 'Juan Pérez', address: 'Av. De Mayo 123', mail: 'juan@mail.com', password: 'passwordJuan123' },
      { name: 'María Gómez', address: 'Av. 9 de Julio 45', mail: 'maria@mail.com', password: 'passwordMaria456' },
      { name: 'Pedro López', address: 'Bahúa Blanca 4378', mail: 'pedro@mail.com', password: 'passwordPedro742' },
      { name: 'Ana Rodríguez', address: 'Gallo 333', mail: 'ana@mail.com', password: 'passwordAna12' },
      { name: 'Carlos Fernández', address: 'El Salvador 3117', mail: 'carlos@mail.com', password: 'passwordCarlos101' }
    ];

    await User.bulkCreate(users);

    console.log('User seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
}

userSeed();

export default userSeed;

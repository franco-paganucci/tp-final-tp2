import User from '../models/User.js';

async function userSeed() {
    try {
        await User.bulkCreate(
            [
                { name: "Juan Pérez" }, 
                { address: "Av. De Mayo 123" }, 
                { mail: "ejemplo_usuario@mail.com" },
                { password: "password123" },
            ]
        )
    } catch (error) {
        
    }
}

export default userSeed;
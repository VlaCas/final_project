//const bcrypt = require('bcrypt');
import UserModel from '../Models/user.model.js';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body; 

    const user = new UserModel({
      name,
      email,
      password
    });

    await user.save();

    res.status(200).send({ message: 'Usuario creado exitosamente', id: user._id });
  } catch (error) {
    console.error('Error al crear usuario', error);
    error.code === 11000
    ? res.status(409).json({ message: 'Ya éste email está en uso.' })  
    : res.status(500).json({ message: 'Error al crear usuario' }); 
  }
};
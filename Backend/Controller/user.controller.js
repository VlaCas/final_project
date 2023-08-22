//const bcrypt = require('bcrypt');
import User from '../Models/user.model.js';
import { createAccessToken } from '../Libs/jwt.js'
// import jwt from 'jsonwebtoken';
// import { config } from 'dotenv';

// config();

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body; 

    const emailInUse = await User.findOne({email})
    if (emailInUse) return res.status(409).send({ email: true, message: 'Este correo está en uso.' })

    const newUser = new User({
      name,
      email,
      password
    });

    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id })

    res.cookie('token', token, {
      maxAge: 1000 * 60 * 60 * 24,
      secure: true, 
      httpOnly: true,
      sameSite: 'lax'
    });
    res.status(200).send({ message: 'User created successfully!!', user: userSaved })
  } catch (error) {
    console.error('Error creating user.', error);
    res.status(500).send('Error creating user.'); 
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }); 
    if (!user) return res.status(400).send({ email: true, message: 'Este usuario no está registrado.' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).send({ password: true, message: 'Contraseña incorrecta.' });

    const token = await createAccessToken({ id: user._id })

    res.cookie('token', token)
    res.status(200).send({message: 'User login successfully!!', user: user});
  } catch (error) {
    console.error('Failed to login.', error);
    res.status(500).send('Failed to login');
  }
};

export const logoutUser = (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0)
  });
  return res.status(200).send('Logout successful!!')
};

// export const profileUser = async (req, res) => {
//   const user = await User.findById(req.user.id);

//   if (!user) return res.status(400).send('User not found.');

//   res.status(200).send({ message: 'Authenticated user successfully!!', user: user })
// };
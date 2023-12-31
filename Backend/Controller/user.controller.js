//const bcrypt = require('bcrypt');
import User from '../Models/user.model.js';
import { createAccessToken } from '../Libs/jwt.js'

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body; 

    const newUser = new User({
      name,
      email,
      password
    });

    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id })

    res.cookie('token', token)
    res.status(200).send('User created successfully!!')
  } catch (error) {
    console.error('Error creating user.', error);
    error.code === 11000
    ? res.status(409).send('This email is already in use.')  
    : res.status(500).send('Error creating user.'); 
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body; 

    const user = await User.findOne({ email }); 
    if (!user) return res.status(400).send('User not found.'); 

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).send('Incorrect password.');

    const token = await createAccessToken({ id: user._id })

    res.cookie('token', token)
    res.status(200).send('User login successfully!!');
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

export const profileUser = async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) return res.status(400).send('User not found.');


  res.status(200).json({ id: user._id, name: user.name, email: user.email })
};
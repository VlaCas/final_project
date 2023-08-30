import bcrypt from 'bcrypt';
import User from '../Models/user.model.js';
import { createAccessToken, createPasswordResetToken } from '../Libs/jwt.js'
import { sendEmail } from '../Libs/sendEmail.js';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body; 

    const emailInUse = await User.findOne({email})
    if (emailInUse) return res.status(409).send({ email: true, message: 'Este correo está en uso.' })

    const newUser = new User({
      name,
      email: email.toLowerCase(),
      password
    });

    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id })

    res.cookie('sessionToken', token, {
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

    const user = await User.findOne({ email: email.toLowerCase() }); 
    if (!user) return res.status(400).send({ email: true, message: 'Este usuario no está registrado.' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).send({ password: true, message: 'Contraseña incorrecta.' });

    const token = await createAccessToken({ id: user._id })

    res.cookie('sessionToken', token, {
      maxAge: 1000 * 60 * 60 * 24,
      secure: true,
      httpOnly: true,
      sameSite: 'lax'
    });
    
    res.status(200).send({ message: '¡Usuario logueado exitosamente!', user: user });
  } catch (error) {
    console.error('Failed to login.', error);
    res.status(500).send({ email: true, message: 'Error al tratar de iniciar sesión.' });
  }
};

export const logoutUser = (req, res) => {
  res.cookie('sessionToken', '', {
    expires: new Date(0)
  });
  return res.status(200).send('Logout successful!')
};

export const sendEmailUser = (req, res) => {
  try {
    const { to, subject, html } = req.body;

    sendEmail(to, subject, html, res);
  } catch (error) {
    console.error('Failed to send email.', error);
    res.status(500).send('Failed to send email.');
  }
};

export const passwordResetRequest = async (req, res) => {
  try {
    const { email } = req.body;

    const userFound = await User.findOne({ email: email.toLowerCase() }); 

    if (!userFound) return res.status(404).send({ email: true, message: 'Este correo no esta registrado.' });

    const passwordResetToken = await createPasswordResetToken({ id: userFound._id });

    res.cookie('passwordResetToken', passwordResetToken, {
      maxAge: 1000 * 60 * 5,
      secure: true, 
      httpOnly: true,
      sameSite: 'lax'
    });

    res.status(200).send({ message: '¡Solicitud de restablecimiento de contraseña realizada con exito!', token: passwordResetToken })
  } catch (error) {
    console.error(error);
    res.status(500).send({ email: true, message: 'Error al solicitar restablecimiento de contraseña.' }); 
  }
};

export const newPasswordUser = async (req, res) => {
  try {
    const { userID } = req.body;
    let { password: newPassword } = req.body;

    const hashedPassword = bcrypt.hashSync(newPassword, 10);
    newPassword = hashedPassword;

    if (!userID) return res.status(404).send({ password: true, message: 'No se ha encontrado el ID del usuario.' });

    const userFound = await User.findByIdAndUpdate(userID, {
      password: newPassword
    });

    if (!userFound) return res.status(404).send({ password: true, message: 'El usuario no se ha encontrado.' })

    res.status(200).send({ message: '¡La contraseña ha sido restablecida con exito!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ password: true, message: 'Error al restablecer la contraseña.' })  
  }
};
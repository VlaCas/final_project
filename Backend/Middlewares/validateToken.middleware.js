import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export const authRequired = (req, res, next) => {
  const { sessionToken } = req.cookies;
  
  if (!sessionToken) return res.status(401).send('No token, authorization denied.');

  jwt.verify(sessionToken, process.env.JWT_SECRET_KEY, (error, user) => {
    if (error) return res.status(403).send('Invalid token.');

    req.user = user;
    
    next();
  });
};

export const verifyUserToken = async (req, res) => {
  const { sessionToken } = req.cookies;

  if (!sessionToken) return res.status(401).send('No token, authorization denied.');

  jwt.verify(sessionToken, process.env.JWT_SECRET_KEY, async (error, user) => {
    if (error) return res.status(403).send('Invalid token, authorization denied.');

    res.status(200).send({ message: 'Authenticated user successfully!!', userId: user.id })
  });
};

export const verifyPasswordResetToken = async (req, res, next) => {
  const { passwordResetToken } = req.cookies;

  const { tokenURL } = req.body;

  if (!passwordResetToken) return res.status(404).send({ password: true, message: 'No se ha encontrado el token que autoriza el restablecimiento de esta contraseña o éste ha caducado.' });

  if (!tokenURL) return res.status(404).send({ password: true, message: 'No se ha encontrado el token en la url.' });

  if (passwordResetToken !== tokenURL) return res.status(400).send({ password: true, message: 'Los tokens no coinciden.' }); 

  jwt.verify(passwordResetToken, process.env.JWT_SECRET_KEY, async (error, user) => {
    if (error) return res.status(403).send({ password: true, message: 'Invalid token, authorization denied.' });

    req.body.userID = user.id;
    next();
  });
};
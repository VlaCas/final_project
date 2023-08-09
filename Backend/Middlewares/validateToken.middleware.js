import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).send('No token, authorization denied.');

  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
    if (error) return res.status(403).send('Invalid token.');

    req.user = user;
    
    next();
  });
};

export const verifyUserToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).send('No token, authorization denied.');

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, user) => {
    if (error) return res.status(403).send('Invalid token.');

    // req.user = user;
    //console.log(user);

    res.status(200).send({ message: 'Authenticated user successfully!!', userId: user.id })
    // const user = await User.findById(user.id);

    // if (!user) return res.status(400).send('User not found.');
  });
};
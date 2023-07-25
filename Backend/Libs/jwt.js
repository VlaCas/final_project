import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export function createAccessToken(payload){
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      { expiresIn: 60 },
      (error, token) => {
        if (error) reject(error);
        resolve(token)
      }
    );
  });
};
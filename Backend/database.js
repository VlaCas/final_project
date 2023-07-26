import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const port = process.env.MONGODB_PORT;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conexión establecida a la base de datos.');
  } catch (error) {
    console.log('Error al establecer conexión a la base de datos.', error);
  }
};

export { connectDB, port };
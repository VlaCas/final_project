import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import userRoutes from './Router/user.routes.js';
import productRoutes from './Router/product.routes.js';

const app = express();

const corsOptions = {
  origin: [
    'http://localhost:5173'
  ]
};

app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());  
app.use(cookieParser());
app.use('/api', userRoutes);
app.use('/api', productRoutes);

export default app;
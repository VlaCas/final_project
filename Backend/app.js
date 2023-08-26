import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import userRoutes from './Router/user.routes.js';
import productRoutes from './Router/product.routes.js';

const app = express();

app.use(cors({ origin: ['http://127.0.0.1:5173', 'http://localhost:5173'], credentials: true }));
app.use(morgan('dev'));
app.use(express.json());  
app.use(cookieParser());
app.use('/api', userRoutes);
app.use('/api', productRoutes);

export default app;
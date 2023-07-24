import express from 'express';
//import cors from 'cors';
import morgan from 'morgan';
import userRoutes from './Router/user.routes.js';

const app = express();
app.use(express.json());  

// const corsOptions = {
//   origin: [
//     // 'http://localhost:5173'
//   ]
// };

app.use(morgan('dev'));
// app.use(cors(corsOptions));
app.use('/api', userRoutes);

export default app;
import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(cors()); // cross-origin resource sharing
app.use(express.json());

// Pasang router todoRoutes di endpoint / root
app.use('/', todoRoutes);

// Global error handler sebagai middleware terakhir
app.use(errorHandler);

export default app;

import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import apartmentRoutes from './routes/apartmentRoutes';

dotenv.config();

const corsOptions={
  origin:['http://localhost:3000','http://frontend:3000'],
  optionsSuccessStatus:200,
};
const app: Application = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/apartments', apartmentRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express from 'express';
import swaggerDocs from './config/swagger.js';
import apiRoutes from './routes/index.js';
import cors from 'cors';

const app = express();

swaggerDocs(app);

const corsOptions = {
  origin: '*', // ⚠ Vercel ke liye temporarily open rakho
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

export default app;

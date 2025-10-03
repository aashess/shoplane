// src/app.js
import 'dotenv/config.js';
import express from 'express';
import productRoutes from './products/product.routes.js'

// Import Routes (we can add more like products, orders later)
import authRoutes from './auth/auth.routes.js';

const app = express();

// Middlewares 
app.use(express.json()); // Parse JSON bodies


// API Routes 
app.use('/api/auth', authRoutes)
app.use('/api/product',productRoutes)

// get routes... 

app.get('/', (req, res) => {
  res.send('🚀 E-commerce API is running...');
});


const PORT = process.env.PORT || 3002;
// const PORT = 8181


  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });


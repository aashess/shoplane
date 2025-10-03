// src/app.js
import 'dotenv/config.js';
import express from 'express';
import connectDB from './config/db.js';

// Import Routes (we can add more like products, orders later)
import authRoutes from './auth/auth.routes.js';

const app = express();

// ===== Middlewares =====
app.use(express.json()); // Parse JSON bodies

// ===== API Routes =====
app.use('/api/v1/auth', authRoutes);

// ===== Health Check Route =====
app.get('/', (req, res) => {
  res.send('🚀 E-commerce API is running...');
});

// ===== Global Error Handler =====
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  res.status(400).json({
    success: false,
    message: err.message,
  });
});

// ===== Start Server =====
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
});

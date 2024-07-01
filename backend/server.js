const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = express();

dotenv.config();

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth');
const settingsRoutes = require('./routes/settings');
const sessionRoutes = require('./routes/sessions');

// Use routes
app.use('/auth', authRoutes);
app.use('/settings', settingsRoutes);
app.use('/sessions', sessionRoutes);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

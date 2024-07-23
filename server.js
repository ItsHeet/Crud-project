require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productroute = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Test route
app.get('/', (req, res) => {
  res.send('Hello');
});

// Product routes
app.use('/products', productroute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const dotenv = require('dotenv').config()
const colors = require('colors')
const PORT = process.env.PORT || 5000; // Use the port you prefer
const connectDB = require('./config/db')

connectDB()

const app = express()

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes (to be added later)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const dotenv = require('dotenv');
const connectToDatabase = require('./config/dbConfig');
const postRoutes = require('./routes/postRoutes');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());

// Database connection
connectToDatabase();

// Register routes
app.use('/posts', postRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

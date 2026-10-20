require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth', authRoutes);

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.log('Database not connected:', error.message);
    });

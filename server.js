const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.status(200).send('🎉 API is live and running smoothly!');
});

// Route to handle POST requests for user data
app.post('/api/data', (req, res) => {
    const { name, age } = req.body;

    // Validate input data
    if (!name || !age) {
        return res.status(400).json({ 
            error: 'Name and age are required fields.' 
        });
    }

    // Successful response
    res.status(200).json({ 
        message: `Hello ${name}, you are ${age} years old!` 
    });
});

// Global 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).json({ 
        error: 'Route not found. Please check the endpoint and try again.' 
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

//https://trial-deployment-f16l.onrender.com/
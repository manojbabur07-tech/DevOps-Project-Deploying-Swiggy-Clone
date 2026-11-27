const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to Swiggy Clone</h1>
        <p>Your food ordering application is running!</p>
        <p>DevOps CI/CD Project</p>
    `);
});

// Health check API
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        application: "Swiggy Clone",
        message: "Application is running successfully"
    });
});

// Sample restaurant API
app.get("/api/restaurants", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Paradise Biryani",
            cuisine: "Biryani",
            rating: 4.5
        },
        {
            id: 2,
            name: "Pizza Hub",
            cuisine: "Pizza",
            rating: 4.2
        },
        {
            id: 3,
            name: "Burger House",
            cuisine: "Burgers",
            rating: 4.3
        }
    ]);
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Swiggy Clone server running on port ${PORT}`);
});

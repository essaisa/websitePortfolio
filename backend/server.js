require("dotenv").config();  // Load environment variables from .env
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());              // Enable CORS for cross-origin requests
app.use(express.json());      // Parse incoming JSON requests

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running successfully!" });
});

// Use the port from .env or default to 5000
const PORT = process.env.PORT || 5001;

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Fetch all users
app.get("/api/users", async (req, res) => {
  try {
    const response = await axios.get("https://dummyjson.com/users?limit=20");
    res.json(response.data.users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Fetch a specific user by ID
app.get("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://dummyjson.com/users/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user details" });
  }
});

// Export the app for testing
module.exports = app;

// Start the server only if not in test environment
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
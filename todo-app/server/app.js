// express mongoose body-parser cors dotenv nodemon
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const todoRoutes = require('./routes/todo.route');
const userRoutes = require('./routes/user.route');

// Middleware


app.use(bodyParser.json());
app.use(express.json());  // ✅ Important
app.use(cors());
console.log("Server setup initializing...");

// MongoDB connection
mongoose.connect(process.env.DB_connection)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

// Routes
app.use("/todo", todoRoutes);
app.use("/user", userRoutes);

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

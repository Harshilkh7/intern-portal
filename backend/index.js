const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const Leaderboard = require("./models/Leaderboard");

const app = express();
const PORT = 5000;

app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/intern-portal')
  .then(() => console.log('✅ Connected to MongoDB locally'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Dummy API routes
app.get("/api/user", async (req, res) => {
  const user = await User.findOne(); // fetch the first user
  res.json(user);
});

app.get("/api/leaderboard", async (req, res) => {
  const data = await Leaderboard.find().sort({ donations: -1 });
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

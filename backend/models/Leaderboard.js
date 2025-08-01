const mongoose = require("mongoose");

const LeaderboardSchema = new mongoose.Schema({
  name: String,
  donations: Number,
});

module.exports = mongoose.model("Leaderboard", LeaderboardSchema);

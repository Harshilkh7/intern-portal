const mongoose = require("mongoose");
const User = require("./models/User");
const Leaderboard = require("./models/Leaderboard");

mongoose.connect('mongodb://127.0.0.1:27017/intern-portal')
  .then(() => console.log('✅ Connected to local MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));


const seed = async () => {
  await User.deleteMany({});
  await Leaderboard.deleteMany({});

  await User.create({
    name: "Harshil",
    referralCode: "harshil2025",
    totalDonations: 7800,
  });

  await Leaderboard.insertMany([
    { name: "Harshil", donations: 7800 },
    { name: "Isha", donations: 6200 },
    { name: "Karan", donations: 5800 },
    { name: "Pooja", donations: 5000 },
  ]);

  console.log("✅ Database seeded");
  mongoose.disconnect();
};

seed();

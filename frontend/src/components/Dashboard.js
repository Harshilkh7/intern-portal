import React from "react";

const Dashboard = ({ name }) => {
  const referral = name.toLowerCase().replace(/\s/g, "") + "2025";

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Welcome, {name} 👋</h1>

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <p><strong>Referral Code:</strong> <span className="text-purple-600">{referral}</span></p>
        <p><strong>Total Donations:</strong> ₹<span className="text-green-600">7800</span></p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Rewards / Unlockables</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Intern Badge 🏅</li>
          <li>Free GSSOC T-shirt 👕</li>
          <li>Top Contributor Certificate 📜</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

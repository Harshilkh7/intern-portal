import React from "react";

const leaderboardData = [
  { name: "Harshil", donations: 7800 },
  { name: "Isha", donations: 6200 },
  { name: "Karan", donations: 5800 },
  { name: "Pooja", donations: 5000 },
  { name: "Amit", donations: 4300 },
];

const Leaderboard = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">🏆 Leaderboard</h1>

      <div className="bg-white rounded-xl shadow-md p-4">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="pb-2">#</th>
              <th className="pb-2">Intern Name</th>
              <th className="pb-2">Donations Raised (₹)</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="py-2">{index + 1}</td>
                <td className="py-2 font-medium">{item.name}</td>
                <td className="py-2 text-green-600">{item.donations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={onBack}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        ← Back to Dashboard
      </button>
    </div>
  );
};

export default Leaderboard;

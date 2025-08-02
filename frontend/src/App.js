import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [user, setUser] = useState(null);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  if (showLeaderboard) {
    return <Leaderboard onBack={() => setShowLeaderboard(false)} />;
  }

  return (
    <div>
      <Dashboard name={user} />
      <div className="p-4 text-center">
        <button
          onClick={() => setShowLeaderboard(true)}
          className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          View Leaderboard
        </button>
      </div>
    </div>
  );
}

export default App;

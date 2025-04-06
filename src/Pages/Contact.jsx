// src/SportsScores.js
import { useState, useEffect } from "react";
import axios from "axios";

const SportsScores = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your actual sports API key and endpoint
  const SPORTS_API_KEY = "c686e08e39msh6dc0fa39201337ep137403jsnd7026374a51e";
  const SPORTS_API_URL = `https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/2023-10-01?key=${SPORTS_API_KEY}`;

  useEffect(() => {
    const fetchSportsScores = async () => {
      try {
        const response = await axios.get(SPORTS_API_URL);
        setScores(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching sports scores", error);
        setError("Failed to fetch sports scores");
        setLoading(false);
      }
    };

    fetchSportsScores();
  }, [SPORTS_API_URL]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading sports scores...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Sports Scores</h1>
        {scores.length > 0 ? (
          <ul className="space-y-6">
            {scores.map((game, index) => (
              <li key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img 
                      src={game.AwayTeamLogo} 
                      alt={game.AwayTeam} 
                      className="w-12 h-12"
                    />
                    <span className="text-lg font-semibold">{game.AwayTeam}</span>
                  </div>
                  <span className="text-xl font-bold">{game.AwayTeamScore} - {game.HomeTeamScore}</span>
                  <div className="flex items-center gap-4">
                    <img 
                      src={game.HomeTeamLogo} 
                      alt={game.HomeTeam} 
                      className="w-12 h-12"
                    />
                    <span className="text-lg font-semibold">{game.HomeTeam}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {game.Status} - {game.DateTime}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No sports scores available</p>
        )}
      </div>
    </div>
  );
};

export default SportsScores;
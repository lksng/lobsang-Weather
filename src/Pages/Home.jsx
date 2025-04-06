



import { useState, useEffect } from "react";
import axios from "axios";
import { WiCloud, WiHumidity, WiStrongWind } from "react-icons/wi";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [quote, setQuote] = useState("");
  const [news, setNews] = useState([]);
  const API_KEY = "bd2ce9ce19c696233b0f06b87a9e447e";
  const NEWS_API_KEY = "c780b468c1b24fc2980dbfef907448a6";

  useEffect(() => {
    fetchQuote(); // Fetch new quote on component mount
    fetchNews(); // Fetch news on component mount
  }, []);

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
      fetchQuote(); // Fetch new motivational quote on each search
    } catch (error) {
      alert("City not found!");
      setWeather(null);
    }
  };

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://zenquotes.io/api/random");
      setQuote(response.data[0].q + " - " + response.data[0].a);
    } catch (error) {
      console.error("Error fetching quote", error);
      setQuote("Stay positive and keep pushing forward!");
    }
  };

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
      );
      setNews(response.data.articles);
    } catch (error) {
      console.error("Error fetching news", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-cover bg-center transition-all duration-500 pt-20">
      {/* Weather Section */}
      <div
        className="bg-blue-300 bg-opacity-50 p-10 text-black text-center backdrop-blur-md shadow-2xl transition-transform duration-500 transform hover:scale-105 w-full max-w-2xl"
      >
        <h1 className="text-5xl font-bold mb-6 animate-pulse">Weather App</h1>
        <div className="h-20 w-20"><img src="weatherlogo2.png" alt="Weather Logo" /></div>
        <br />
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                fetchWeather(); // call the function when enter is pressed
              }
            }}
            className="p-4 rounded-lg text-black w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          />
          <button
            onClick={fetchWeather}
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Search
          </button>
        </div>
        {weather && (
          <div className="mt-4 p-6 justify-center bg-gray-300 bg-opacity-70 rounded-lg shadow-lg animate-fadeIn flex flex-col items-center">
            <h2 className="text-4xl font-semibold">{weather.name}, {weather.sys.country}</h2>
            <p className="text-xl capitalize mt-2">{weather.weather[0].description}</p>
            <p className="text-6xl font-bold mt-4">{weather.main.temp}°C</p>
            <div className="flex items-center gap-4 mt-6">
              <div className="flex flex-col items-center">
                <WiCloud className="text-5xl" />
                <p className="text-lg">Clouds: {weather.clouds.all}%</p>
              </div>
              <div className="flex flex-col items-center">
                <WiHumidity className="text-5xl" />
                <p className="text-lg">Humidity: {weather.main.humidity}%</p>
              </div>
              <div className="flex flex-col items-center">
                <WiStrongWind className="text-5xl" />
                <p className="text-lg">Wind: {weather.wind.speed} m/s</p>
              </div>
            </div>
            {/* Display Motivational Quote */}
            <div className="mt-6 p-4 bg-yellow-200 bg-opacity-80 rounded-lg shadow-md">
              <p className="text-lg font-semibold">{quote}</p>
            </div>
          </div>
        )}
      </div>

      {/* News Section */}
      <div className="my-10 w-full max-w-3xl p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Latest News</h2>
        {news.length > 0 ? (
          <ul>
            {news.map((article, index) => (
              <li key={index} className="mb-4 border-b pb-4 flex flex-col md:flex-row items-center gap-4">
                {article.urlToImage && (
                  <img 
                    src={article.urlToImage} 
                    alt={article.title} 
                    className="w-32 h-20 object-cover rounded-lg shadow-md"
                  />
                )}
                <div>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg font-semibold">
                    {article.title}
                  </a>
                  <p className="text-gray-600 text-sm mt-1">{article.source.name}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No news available</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
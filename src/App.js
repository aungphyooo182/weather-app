import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import "./App.css";
import { WEATHER_API_URL, WEATHER_API_KEY, FORECAST_API_URL, UNSPLASH_API_URL, UNSPLASH_API_KEY } from "./api";
import { useState, useEffect } from "react";
import Forecast from "./components/forecast/forecast";
import { useGeolocated } from "react-geolocated";

import { CircularEffect } from 'react-loader-progressbar';
function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(null);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  const fetchAPI = async (lat, lon) => {
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${FORECAST_API_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: weatherResponse.name, ...weatherResponse });
        setForecast({ city: weatherResponse.name, ...forecastResponse });
        fetchPhotos(weatherResponse.name)
      })
      .catch((err) => { console.error(err); setLoading(false); });
  }

  const handleOnSearchChange = (searchData) => {
    setError(null);
    setLoading(true);
    setImageUrl(null);
    const [lat, lon] = searchData.value.split(" ");
    fetchAPI(lat, lon);
  };

  const handleOnSearchError = (err) => {
    setError('API sometimes fails to load cities. Please try again.');
  }

  const defaultCity = () => {
    setLoading(true);
    setImageUrl(null);
    const lat = coords.latitude;
    const lon = coords.longitude;
    fetchAPI(lat, lon);
  }

  const fetchPhotos = async (city) => {
    try {
      const response = await fetch(
        `${UNSPLASH_API_URL}?query=${city}&client_id=${UNSPLASH_API_KEY}`,
      );

      if (response.ok) {
        const data = await response.json();
        if (data.results.length > 0) {
          setImageUrl(decodeURI(data.results[0].urls.regular))
          setLoading(false);
        } else {
          setLoading(false);
        }
      } else {
        setError('Background Image API failed to load. Please try again.')
        console.error('Error fetching photos:', response.status);
      }
    } catch (error) {
      console.error('Error fetching photos:', error);
      setLoading(false);
    };
  }

  useEffect(() => {
    if (coords && isGeolocationAvailable && isGeolocationEnabled) {
      defaultCity()
    } else if (!isGeolocationAvailable) {
      setError('Geolocation is not available. For better experience, please allow location access.')
    } else if (!isGeolocationEnabled) {
      setError('Geolocation is not enabled. For better experience, please allow location access.')
    }
    return () => {
    }
  }, [coords, isGeolocationAvailable, isGeolocationEnabled])

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageLoaded(true);
    };
    return () => {
      setImageLoaded(false);
    }
  }, [imageUrl]);

  return (
    <div className="container" style={{
      backgroundImage: imageLoaded ? `url("${imageUrl}")` : 'none'
    }}>
      <Search onSearchChange={handleOnSearchChange}
        onSearchError={handleOnSearchError} />

      {loading && <CircularEffect />}

      {!loading && !error &&
        <div className="wrapper">
          {currentWeather && <CurrentWeather data={currentWeather} />}
          {forecast && <Forecast data={forecast} />}
        </div>
      }

      {
        error && <div className="error-page">
          <p>{error}</p>
        </div>
      }

    </div>
  );
}

export default App;

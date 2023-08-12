export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export const GEO_API_URL = process.env.REACT_APP_GEO_API_URL

export const WEATHER_API_URL = process.env.REACT_APP_WEATHER_API_URL
export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const FORECAST_API_URL = process.env.REACT_APP_FORECAST_API_URL

export const UNSPLASH_API_URL = process.env.REACT_APP_UNSPLASH_API_URL
export const UNSPLASH_API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY
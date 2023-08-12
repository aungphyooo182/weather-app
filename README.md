## Setup Document:

### 1. Introduction:

The Weather App is a web application built using the React framework and a combination of APIs, including UNSPLASH_API, openweathermap API, wft-geo-db.p.rapidapi API, to provide users with up-to-date weather information and a visually appealing experience. The primary purpose of the Weather App is to allow users to quickly access current weather conditions for their current location or any other city they wish to search for, along with a 7-day forecast and an accompanying background image that reflects the selected city's atmosphere.

Key Features:

1. **Current Weather**: Users can instantly view the current weather conditions of their current location upon opening the app. This includes details such as temperature, humidity, wind speed, and weather conditions (e.g., sunny, rainy, cloudy).

2. **City Search**: The app enables users to search for weather information in other cities by typing in the city name. The app utilizes the wft-geo-db.p.rapidapi API to provide autocomplete suggestions as the user types.

3. **7-Day Forecast**: Users can access a comprehensive 7-day weather forecast for any selected city. This forecast includes daily temperature highs and lows, as well as expected weather conditions.

4. **City Background Image**: To enhance the user experience, the app dynamically fetches background images from the UNSPLASH_API based on the selected city. This visually appealing feature adds context and atmosphere to the weather information.

5. **User Location Detection**: The app uses the react-geolocated package to detect the user's current location and display the weather information accordingly.

6. **Loading Indicator**: The react-loader-progressbar package is implemented to provide a loading indicator while fetching weather data from the APIs, ensuring a smooth user experience.

7. **Enhanced UI Components**: The app integrates react-select-async-paginate and react-accessible-accordion components to improve the user interface. The former helps manage asynchronous city search suggestions, while the latter enhances the collapsible sections for weather details.

Technologies Used:

- React: A popular JavaScript library for building user interfaces.
- UNSPLASH_API: Used to retrieve background images based on city names.
- openweathermap API: Provides weather data for the specified cities.
- wft-geo-db.p.rapidapi API: Offers city search autocomplete suggestions and geographical data.
- CSS: Used for styling and layout of the app.
- react-select-async-paginate: Enhances city search functionality.
- react-accessible-accordion: Improves the accordion-style weather details section.
- react-geolocated: Facilitates user location detection.
- react-loader-progressbar: Displays loading indicators during API calls.

In summary, the Weather App is designed to deliver accurate and visually appealing weather information to users through a combination of React components and various APIs, creating an engaging and user-friendly experience for checking weather conditions and forecasts in different cities.

### 2. Prerequisites:

- Node.js and npm (Node Package Manager) installed
- Git installed
- API key from the weather API provider

### 3. Installation Steps:

The step-by-step process to install and set up the project locally. This may include:

1. Clone the repository from GitHub: `git clone <repo_url>`
2. Navigate to the project directory: `cd weather-app`
3. Install dependencies: `npm install`
4. Create a `.env` file and add your API key: `REACT_APP_API_KEY=<your_api_key>`
5. Start the development server: `npm start`

### 4. Configuration:

If the weather API has different endpoints for development and production environments, change in .env-cmdrc.json file.

### 5. Usage:

How to use the Weather App once it's set up:

- Open a web browser
- Navigate to `http://localhost:3000`
- Use the search bar to find and select a city
- View the current weather and weather forecasts for the selected city

## Delivery Document:

### 1. Introduction:

The Weather App is a web application built using the React framework and a combination of APIs, including UNSPLASH_API, openweathermap API, wft-geo-db.p.rapidapi API, to provide users with up-to-date weather information and a visually appealing experience. The primary purpose of the Weather App is to allow users to quickly access current weather conditions for their current location or any other city they wish to search for, along with a 7-day forecast and an accompanying background image that reflects the selected city's atmosphere.

### 2. Deployment:

Provide step-by-step instructions for deploying the Weather App. Since you mentioned using Vercel, you can guide the reader through deploying the app to Vercel:

1. Log in to Vercel (create an account if needed).
2. Create a new project and connect it to your GitHub repository.
3. Configure the deployment settings, such as environment variables (API key) and build settings.
4. Deploy the app to a Vercel domain.

### 3. Testing:

**Location Services and Error Handling:**
In the event that location services are not enabled on the testing devices, an error message will be displayed, and the app won't be able to detect the current location. To ensure accurate functionality, we recommend enabling location services.

**Current Location Detection:**
Upon granting permission for location services, the app will seamlessly detect the current location and subsequently display the corresponding weather data.

**Supported Cities and API Compatibility:**
Please be aware that the availability of weather data may vary for different cities due to the limitations of our API provider. It is advisable to search for cities that are supported by the API provider to ensure accurate and reliable weather information.

**Background Image Loading:**
Please allow a moment for the background image to load after selecting a city. The loading time may vary based on network conditions, but we're committed to delivering a visually appealing experience to enhance your interaction with the app.

Thank you for your cooperation and understanding as we strive to provide you with the best possible user experience.

### 4. GitHub Repository:

https://github.com/aungphyooo182/weather-app/tree/master

### 5. Deployed App URL:

Share the URL where the Weather App is deployed and accessible online.

### 6. Conclusion:

In conclusion, the document provides a comprehensive overview of the Weather App, its purpose, key features, technologies utilized, and important considerations such as location services, city support, and background image loading. We greatly appreciate your time and interest in our application.

Your feedback is invaluable to us as we continuously work to enhance the app's functionality and user experience. If you come across any issues, have suggestions for improvement, or simply want to share your thoughts, please don't hesitate to reach out. Your input will aid us in refining the Weather App to better meet your needs.

Thank you once again for your attention, and we look forward to serving you better with each interaction.

Best regards,

Aung Phyo Oo
Contact : aungphyooo182@gmail.com

# Weather Forecast

A weather forecast web application that displays current weather conditions and a 5-day forecast for any city worldwide using real-time API data.

## Project Function

This weather application fetches and displays accurate weather information for any city. It provides:

- Current weather conditions including temperature, description, humidity, and wind speed
- 5-day weather forecast preview
- City search functionality with worldwide coverage
- Real-time data from OpenWeatherMap API
- Clean, responsive interface for all devices
- Temperature in Celsius and wind speed in km/h

## Features

- **Current Weather Display**:
  - City name and country information
  - Current temperature in Celsius
  - Weather description (sunny, rainy, cloudy, etc.)
  - Humidity percentage
  - Wind speed in km/h
  - Current date display
- **5-Day Forecast**: View upcoming weather predictions with daily temperatures and conditions
- **City Search**:
  - Search for any city in the world
  - Press Enter or click the Search button to fetch weather data
  - Invalid city names trigger an error alert
- **Real-time Data**: Uses OpenWeatherMap API for accurate, up-to-date information
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean Interface**: Organized layout with current weather on the left and forecast on the right

## How to Run

### Quick Start

1. Open the `weather` folder
2. Double-click on `index.html` or right-click and select "Open with" your preferred web browser
3. The weather application will load immediately in your browser

**No installation or server required** - it runs entirely in your browser with internet connection!

## How to Use

1. **Search for a City**:

   - Type a city name (e.g., "London", "New York", "Tokyo") in the search box
   - Press Enter or click the **Search** button

2. **View Current Weather**:

   - City and country information appears at the top
   - Temperature, weather description, humidity, and wind speed are displayed
   - Current date is shown

3. **Check the Forecast**:

   - The 5-day forecast appears below showing:
     - Day of the week (Today, Mon, Tue, etc.)
     - High temperature for that day
     - Weather condition (Clear, Rainy, Cloudy, etc.)

4. **Search Again**:
   - Enter a different city name and search to update the weather data

## Files

- `index.html` - Structure and layout
- `style.css` - Styling and responsive design
- `script.js` - Weather data fetching and DOM updates
- `README.md` - This file

## API Information

This application uses the **OpenWeatherMap API** for weather data:

- **API Endpoint**: `https://api.openweathermap.org/data/2.5/forecast`
- **Data Format**: JSON
- **Measurements**: Metric (Celsius for temperature, km/h for wind speed)
- **API Key**: Pre-configured in the script (Free tier)

## Technologies

- HTML5
- CSS3
- JavaScript (Vanilla/ES6)
- OpenWeatherMap API (Free tier)

## Notes

- An active internet connection is required to fetch weather data
- The API key is included for demonstration purposes
- Weather data is updated each time you perform a new search
- Search is case-insensitive and works with partial city names

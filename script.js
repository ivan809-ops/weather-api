const API_KEY = "05d93800632a0f200148d5c3cdeaf873";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const locationEl = document.getElementById("location");
const dateEl = document.getElementById("date");
const tempEl = document.getElementById("temp");
const descEl = document.getElementById("desc");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const forecastEl = document.getElementById("forecast");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) return alert("Enter a city name");
  loadWeather(city);
});

async function loadWeather(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!res.ok) return alert("City not found");

  const data = await res.json();
  updateCurrent(data);
  updateForecast(data.list);
}

function updateCurrent(data) {
  const now = data.list[0];
  locationEl.textContent = `${data.city.name}, ${data.city.country}`;
  dateEl.textContent = new Date().toDateString();
  tempEl.textContent = `${Math.round(now.main.temp)}°C`;
  descEl.textContent = now.weather[0].description;
  humidityEl.textContent = `${now.main.humidity}%`;
  windEl.textContent = `${Math.round(now.wind.speed)} km/h`;
}

function updateForecast(list) {
  const days = {};
  list.forEach(item => {
    const day = new Date(item.dt * 1000).toDateString();
    if (!days[day]) days[day] = item;
  });

  forecastEl.innerHTML = "";
  Object.values(days).slice(0, 5).forEach((d, i) => {
    forecastEl.innerHTML += `
      <div class="day">
        <span>${i === 0 ? "Today" : new Date(d.dt * 1000).toLocaleDateString(undefined,{ weekday:"short"})}</span>
        <strong>${Math.round(d.main.temp)}°C</strong>
        <small>${d.weather[0].main}</small>
      </div>
    `;
  });
}

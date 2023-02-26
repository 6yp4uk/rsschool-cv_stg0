//whether and quotes
const quote_button = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity= document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector(".city");
if (document.querySelector('.city').value === ""){
  city.value = "Минск"
}

city.addEventListener("change", getWeather);

function setLocalStorage() {
  localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
}
window.addEventListener('load', getLocalStorage, )


async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=002a0a2fcf8c29e21725a6fe8a847260&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.message == "city not found" || document.querySelector('.city').value === ""){
      temperature.textContent = `Не верно введен населенный пункт!`;
      wind.textContent = ""
      humidity.textContent = ""
      weatherDescription.textContent = "";
      return;
    }
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `Температура: ${Math.floor(data.main.temp)}°C`;
    wind.textContent = `Скорость ветра: ${Math.floor(data.wind.speed)} м/с`
    humidity.textContent = `Влажность: ${Math.floor(data.main.humidity)} %`
    weatherDescription.textContent = data.weather[0].description;
  }
  getWeather()



//quotes

async function getQuotes() {  
    const res = await fetch("assets/json/data.json");
    const date = await res.json();
    number = Math.floor(Math.random()*(date.length - 0) + 0)
    quote.textContent = date[number].text
    author.textContent = date[number].author
  }
  getQuotes();

quote_button.addEventListener('click', getQuotes)


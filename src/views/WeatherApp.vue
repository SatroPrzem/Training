<template>
  <div
    id="application"
    :class="
      typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''
    "
  >
    <main>
      <div class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="Type a city"
          v-model="query"
          v-on:keypress="fetchLocation"
        />
      </div>
      <div class="weather-wrap" v-if="location !== '' || weather !== ''">
        <div class="location-box">
          <div class="location">
            {{ location[0].name }} {{ location[0].country }}
          </div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>
        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
          <div class="weather">{{ weather.weather[0].description }}</div>
        </div>
      </div>
      <div class="weather-info" v-else>
        <p>
          This is a weather app that will show You the weather form the cities
          around the world. Please type a city that you want to check out.
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      api_key: "4e95ad96cfbcee5f362b2feda522b14a",
      url_base: "https://openweathermap.org/data/2.5",
      query: "",
      weather: "",
      location: "",
    };
  },
  methods: {
    fetchLocation(e) {
      if (e.keyCode === 13) {
        fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${this.query}&limit=5&appid=${this.api_key}`
        )
          .then((data) => {
            return data.json();
          })
          .then(this.setLocation)
          .catch((error) => {
            console.error("Masz lipe:", error);
          });

        this.query = "";
      }
    },
    fetchWeather() {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${this.location[0].lat.toString()}&lon=${this.location[0].lon.toString()}&appid=${
          this.api_key
        }&units=metric`
      )
        .then((data) => {
          return data.json();
        })
        .then(this.setResults);
    },
    setLocation(data) {
      this.location = data;
      this.fetchWeather();
    },
    setResults(data) {
      this.weather = data;
    },
    dateBuilder() {
      let d = new Date();
      let months = [
        "Janyary",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Montserrat", sans-serif;
}
#application {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/bgimage.jpg"), bottom;
  background-size: cover;
  transition: 0.3s;
}
#application.warm {
  background: url("../assets/bgimagewarm.jpg");
}

main {
  min-height: 100vh;
  padding: 15px;
}
.search-box {
  margin-top: 10px;
  width: 100%;
}
.search-box .search-bar {
  display: block;
  margin: 0 auto;
  padding: 15px;
  color: #535353;
  text-align: center;
  font-size: 20px;
  appearance: none;
  border: none;
  border-radius: 0 16px 0 16px;
  outline: none;
  background: none;
  background-color: rgba(255, 255, 255, 0.7);
  transition: 0.15s linear;
}
.search-box .search-bar:focus {
  border-radius: 16px 0 16px 0;
  background-color: rgba(255, 255, 255, 0.9);
  color: #313131;
}
.weather-wrap {
  margin-top: 30px;
}
.weather-box,
.location-box,
.weather-info {
  text-align: center;
  color: #fff;
  text-shadow: -3px -1px rgba(0, 0, 0, 0.3);
}
.location-box .location {
  font-size: 32px;
  font-weight: 500;
}
.location-box .date {
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
}
.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  font-size: 102px;
  font-weight: 800;

  text-shadow: -6px -3px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: -4px -2px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  margin: 30px auto;
}
.weather-box .weather {
  font-size: 48px;
  font-weight: 800;
  font-style: italic;
}
.weather-info {
  margin-top: 24px;
  padding: 0 100px;
  letter-spacing: 1px;
  line-height: 2;
  font-size: 32px;
}
</style>

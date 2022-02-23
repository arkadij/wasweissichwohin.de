<template>
  
    <div @vnode-mounted="fetchWeather">
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>

        <div class="weather-box">
          <div class="temp"> {{ Math.round(weather.main.temp) }}°c </div>
          <div class="weather"> {{ weather.weather[0].main }} </div>
          <div v-if="weather.wind.speed < 1" class="wind"> {{ weather.wind.speed }} Calm </div>
          <div v-if="weather.wind.speed > 1 && weather.wind.speed < 3" class="wind"> {{ weather.wind.speed }} Light Air </div>
          <div v-if="weather.wind.speed > 3" class="wind"> {{ weather.wind.speed }} PLAY THE CONDITION! </div>    
        </div>
      </div>
    </div>

</template>

<script>
export default {
  data () {
    return {
      api_key: 'c2ac0d3bbf9a640778032fa63629abc0',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: 'Berlin',
      weather: {}
    }
  },
  methods: {
    fetchWeather () {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
    },
    
    setResults (results) {
      this.weather = results;
    },
    dateBuilder () {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }
  }
}
</script>
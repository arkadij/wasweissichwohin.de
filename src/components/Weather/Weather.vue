<template>
  
    <div class="w-full mt-2 mr-2 rounded-md shadow-md bg-primary border-gray-100 border-2" @vnode-mounted="fetchWeather">
      <div v-if="typeof weather.main != 'undefined'">
        <div class="location-box pl-2 pt-1 pb-1 border-b-2 border-onprimary">
          <div><div class="font-semibold inline-flex ">
            {{ weather.name }} | {{ weather.sys.country }} | </div>
            <div class="inline-flex text-left md:text-right text-base"> {{dateBuilder() }}</div>
          </div>
        </div>

        <div class="pl-2">
          <div> Feels like {{ Math.round(weather.main.feels_like) }}°c </div>
          <div> {{ weather.clouds.all }}% Clouds in the sky </div>
          <div v-if="weather.wind.speed > 0 && weather.wind.speed < 1"> {{ Math.round(weather.wind.speed) }} Calm</div>
          <div v-if="weather.wind.speed > 1 && weather.wind.speed < 2 "> {{ Math.round(weather.wind.speed) }} Light Air</div>
          <div v-if="weather.wind.speed > 2 && weather.wind.speed < 3"> {{ Math.round(weather.wind.speed) }} Gentle Breeze</div> 
          <div v-if="weather.wind.speed > 3 && weather.wind.speed < 4"> {{ Math.round(weather.wind.speed) }} a bit windy</div>
          <div v-if="weather.wind.speed > 5 && weather.wind.speed < 6"> {{ Math.round(weather.wind.speed) }} Play the condition!</div>
          <div v-if="weather.wind.speed > 6"> {{ Math.round(weather.wind.speed) }} Too.windy.To.Play.Outside.Period.</div>     
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
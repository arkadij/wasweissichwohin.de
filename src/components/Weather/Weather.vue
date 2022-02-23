<template>
  
    <div class="w-full mt-2 mr-2 border-2 rounded-md shadow-md" @vnode-mounted="fetchWeather">
      <div v-if="typeof weather.main != 'undefined'">
        <div class="location-box pl-2 pt-1 pb-1 border-b-2 border-grey-400">
          <div><div class="font-semibold inline-flex ">
            {{ weather.name }} | {{ weather.sys.country }} </div>
            <div class="inline-flex text-right">{{ dateBuilder() }}</div>
          </div>
        </div>

        <div class="pl-2">
          <div> Feels like {{ weather.main.feels_like }}°c </div>
          <div> {{ weather.clouds.all }}% Clouds </div>
          <div v-if="weather.wind.gust > 0 && weather.wind.gust < 1"> {{ weather.wind.gust }} Calm</div>
          <div v-if="weather.wind.gust > 1 && weather.wind.gust < 2 "> {{ weather.wind.gust }} Light Air</div>
          <div v-if="weather.wind.gust > 2 && weather.wind.gust < 3"> {{ weather.wind.gust }} Gentle Breeze</div> 
          <div v-if="weather.wind.gust > 3 && weather.wind.gust < 4"> {{ weather.wind.gust }} A bit windy</div>
          <div v-if="weather.wind.gust > 5 && weather.wind.gust < 6"> {{ weather.wind.gust }} Windy</div>
          <div v-if="weather.wind.gust > 6"> {{ weather.wind.gust }} Strong winds</div>     
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
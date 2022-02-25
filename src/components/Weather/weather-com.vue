<template>
    
</template>

<script>
export default {
    setup() {
        const api_key = ref('c2ac0d3bbf9a640778032fa63629abc0')
        const url_base = ref('https://api.openweathermap.org/data/2.5/')
        const error = ref(null)
        const city = ref('Berlin')
        const weather = ref({})

        fetchWeather = async () => {
            await fetch(`${url_base.value}weather?q=${city.value}&units=metric&APPID=${api_key.value}`)
            .then(res => {
                return res.json()
            })
            .then(weather.value)
        }

        return { error, city }
    }
}
</script>

<style>

</style>
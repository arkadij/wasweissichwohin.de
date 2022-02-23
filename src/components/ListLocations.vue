<template>
    <div v-for="loc in locations" :key="loc.id">
        <router-link @click="showDetails()" :to="{ name: 'LocationDetails', params: { id: loc.id }}">
            <div class="single">
                <div class="thumbnail">
                    <img :src="loc.locationUrl">
                </div>
                <div class="info">
                    <h3>{{ loc.title }}</h3>
                    <p>created by {{ loc.userName }}</p>
                </div>
            </div>
        </router-link>  
    </div>
    
</template>

<script>

export default {
    props: ['locations'],
    setup(){
        
    }
}
</script>

<style>

</style>
<template>
<div class="grid grid-cols-4 mx-auto gap-4 place-content-around hover:place-content-center my-2 box-content overflow-auto">
    <div class="" v-for="loc in locations" :key="loc.id">
        <router-link :to="{ name: 'LocationDetails', params: { id: loc.id }}">
            <!-- Single Location Card  -->
            <div class="p-8 rounded-md bg-primary mb-4 transition-all hover:bg-secondary hover:text-white shadow-md">
                <div class="locationImg">
                    <img class="max-h-32" :src="loc.locationUrl">
                </div>
                <div class="locationContent p-2">
                    <h2 class="font-heading font-medium hover:text-white">{{ loc.title }}</h2>
                    <p class="text-sm text-gray-400">posted by {{ loc.userName }}</p>
                </div>
            </div>
        </router-link>  
    </div>
</div>    
    
</template>

<script>

export default {
    props: ['locations']
    
}
</script>

<style>

</style>
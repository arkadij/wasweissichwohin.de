<template>
<div class="dark p-2 w-full box-content overflow-auto">
    <div class="" v-for="loc in locations" :key="loc.id">
        <router-link :to="{ name: 'LocationDetails', params: { id: loc.id }}">
            <!-- Single Location Card  -->
            <div class="flex-col p-10 rounded-md bg-gray-100 mt-4 transition-all hover:bg-red-200 shadow-md">
                <div class="locationImg max-h-32">
                    <img class="max-h-32 overflow-auto" :src="loc.locationUrl">
                </div>
                <div class="locationContent p-2">
                    <h2 class="font-bold text-lg">{{ loc.title }}</h2>
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
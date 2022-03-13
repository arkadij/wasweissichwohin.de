<template>
<div class="w-full font-heading grid grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4 gap-6 my-2 box-content overflow-auto">
    <div class="" v-for="loc in locations" :key="loc.id">
        <router-link :to="{ name: 'LocationDetails', params: { id: loc.id }}">
            <!-- Single Location Card  -->
            <div class="rounded-md mb-4 transition-all hover:bg-primary shadow">
                <div class="aspect-w-4 aspect-h-2">
                    <img class="object-cover rounded-t-md" :src="loc.locationUrl">
                </div>
                <div class="locationContent p-2">
                    <h2>{{ loc.title }}</h2>
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
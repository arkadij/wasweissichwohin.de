<template>
    <div class="container">
        <!-- Logo -->
        <div class="logo flex">
            <Logo />
        </div>
        <!-- Header -->
        <div class="header flex">
            <Header />
        </div>
        <!-- weather api -->
        <div class="weather flex">
            <Weather />
        </div>
        <!-- List of Location entries -->
        <div v-if="documents" class="content flex">
            <ListLocations :locations="documents"/> 
        </div>
        <div class="navbar flex">
            <Navbar />
        </div>
        <!-- Logout -->
        <div class="logout flex">
             <Logout />
        </div>
        <!-- Online -->
        <div class="online flex">
            <Online />
        </div>
        <!-- Footer -->
        <div class="footer flex">
            <Footer />
        </div>
    </div>
</template>

<script>
import Logo from "../components/Logo.vue"
import Header from "../components/Header.vue"
import Weather from "../components/Weather/Weather.vue"
import Online from "../components/Online.vue"
import Footer from "../components/Footer.vue"
import Navbar from "../components/Navbar.vue"
import Logout from "../components/Logout.vue"
import ListLocations from '../components/ListLocations.vue'
import getCollection from "../composables/getCollection.js"


import { ref } from 'vue'

export default {
    components: { Logo, Header, Weather, Online, Footer, Navbar, ListLocations, Logout },
    setup(){
        const showDetails = ref(false)        

        const { documents } = getCollection('locations')
        return { documents, showDetails }
    }
    
}
</script>

<style>

</style>
<template>
    <div class="location locations-container">
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
        <div v-if="documents" class="entries flex">
            <ListLocations :locations="documents"/>
        </div>
        <!-- Online -->
        <div class="online flex">
            <Online />
        </div>
        <div class="navbar flex">
            <Navbar />
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
import Weather from "../components/Weather.vue"
import Online from "../components/Online.vue"
import Footer from "../components/Footer.vue"
import Navbar from "../components/Navbar.vue"
import ListLocations from '../components/ListLocations.vue'
import getCollection from "../composables/getCollection.js"



export default {
    components: { Logo, Header, Weather, Online, Footer, Navbar, ListLocations },
    setup(){
        const { documents } = getCollection('locations')
        return { documents }
    }
    
}
</script>

<style>

</style>
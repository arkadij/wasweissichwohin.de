<template>
    <div class="container">
        <div class="logo flex">
            <Logo />
        </div>
        <!-- Header -->
        <div class="header flex">
            <Header />
        </div>
        <!-- weather api-->
        <div class="weather flex">
            <Weather />
        </div>
        <!-- Create Location-->
        <div class="content flex">
            <CreateLocation />
        </div>
        <!-- Online -->
        <div class="online flex ">
            <Online />
        </div>
        <div class="navbar flex">
            <Navbar />
        </div>
        <!-- Logout -->
        <div class="logout flex">
            <Logout />
        </div>
        <!-- Footer -->
        <div class="footer flex">
            <Footer />
        </div> 
    </div>    
</template>

<script>
import Logo from "../components/Logo.vue";
import Header from "../components/Header.vue";
import Weather from "../components/Weather/Weather.vue";
import Online from "../components/Online.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Logout from "../components/Logout.vue"
import CreateLocation from "../components/Locations/CreateLocation.vue";

export default {
    components: { Logo, Header, Weather, Online, Footer, Navbar, CreateLocation, Logout }
}
</script>

<style>

</style>
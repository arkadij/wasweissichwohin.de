<template>
  <div class="locations-container">
    
    <div class="logo flex">
        <Logo />
    </div>
    <!-- Header -->
    <div class="header flex">
        <Header />
    </div>
    <!-- weather field -->
    <div class="weather flex bg-error">
        <Weather />
    </div>
    <!-- Locations-->
    <div class="entries flex bg-trinary">
        
    </div>
    <!-- Online -->
    <div class="online flex bg-error">
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
import Logo from "../components/Logo.vue";
import Header from "../components/Header.vue";
import Weather from "../components/Weather.vue";
import Online from "../components/Online.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
export default {
    components: { Logo, Header, Weather, Online, Footer, Navbar }
}
</script>

<style>

</style>
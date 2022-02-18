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
    <div class="weather flex">
        <Weather />
    </div>
    <!-- Entries-->
    <div class="entries bg-trinary">
        <Entries />
    </div>
    <!-- Online -->
    <div class="online flex">
        <Online />
    </div>
    <div class="navbar bg-error">
        <!-- <Navbar /> -->
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
import Entries from "../components/Entries.vue";
import Online from "../components/Online.vue";
import Footer from "../components/Footer.vue";
export default {
    components: { Logo, Header, Weather, Entries, Online, Footer }
}
</script>

<style>

</style>
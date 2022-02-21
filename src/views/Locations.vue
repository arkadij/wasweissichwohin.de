<template>
    <div class="locations-container">
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
        <div class="entries flex bg-trinary">
            <div v-if="error" class="error">Something is wrong..</div>
            <div v-if="documents">
                <div v-for="doc in documents" :key="doc.id">
                    {{ doc.title }}
                    {{ doc.description }}
                    {{ doc.filePath }}
                </div>
            </div>
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
import getCollection from "../composables/getCollection.js"

export default {
    components: { Logo, Header, Weather, Online, Footer, Navbar },
    setup(){
        const { error, documents } = getCollection('locations')

        return { error, documents }

    }
}
</script>

<style>

</style>
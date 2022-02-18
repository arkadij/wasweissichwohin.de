<!-- <template>
    <Navbar />
    
    <ChatWindow />
</template> -->

<template>
  <div class="chatroom-container">
    
    <div class="logo flex">
        <Logo />
    </div>
    <!-- Header -->
    <div class="header flex justify-start">
        <Header />
    </div>
    <!-- weather field -->
    <div class="weather flex">
        <Weather />
    </div>
    <!-- Chat Window -->
    <div class="chatwindow flex">
        <ChatWindow />
    </div>
    <div class="navbar bg-primary">
        <!-- <Navbar /> -->
    </div>
    <!-- Online -->
    <div class="online bg-primary">
        Online
    </div>
    <!-- Footer -->
    <div class="footer flex">
        <Footer />
    </div>
    
    <div class="input bg-blue-500">
        <div class="options bg-pink-400">options</div>
        <div class="input-field bg-blue-200">
            <NewChatForm />
        </div>
        <div class="send bg-purple-600">Send btn</div>
    </div>
</div>
</template>

<script>

import getUser from "../composables/getUser";
import { useRouter } from "vue-router" 
import { watch } from 'vue'
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from '../components/ChatWindow.vue'
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Weather from "../components/Weather.vue";
import Logo from "../components/Logo.vue";

export default {
    components: { NewChatForm, ChatWindow, Navbar, Footer, Header, Weather, Logo },
    setup(){
        const { user } = getUser()
        const router = useRouter()
        
        watch(user, () => {
            if(!user.value) {
                router.push({path: '/'})
            }
        })
    }
}
</script>

<style>

</style>
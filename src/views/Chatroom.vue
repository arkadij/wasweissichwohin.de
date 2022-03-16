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
    <!-- weather field -->
    <div class="weather flex">
        <Weather />
    </div>
    <!-- Content / Defaut ChatWindow -->
    <div class="content flex">
            <ChatWindow />
    </div>
    <div class="input">
        <div class="input-field">
            <NewChatForm />
        </div>    
    </div>
    <!-- Navbar -->
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

import getUser from "../composables/getUser"
import { useRouter } from "vue-router" 
import { watch } from 'vue'
import NewChatForm from "../components/NewChatForm.vue"
import ChatWindow from '../components/ChatWindow.vue'
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"
import Weather from "../components/Weather/Weather.vue"
import Logo from "../components/Logo.vue"
import Online from "../components/Online.vue"
import Logout from "../components/Logout.vue"

export default {
    components: { NewChatForm, ChatWindow, Navbar, Footer, Header, Weather, Logo, Online, Logout, 
    
    },
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

<!-- <template>
    <Navbar />
    
    <ChatWindow />
</template> -->

<template>
  <div class="chatroom-container">
    
    <div class="logo bg-yellow-400">Logo</div>
    <!-- Chatroom Header -->
    <div class="header bg-yellow-700">
    header
    </div>
    <!-- weather field -->
    <div class="weather bg-red-400">
        weather
    </div>
    <!-- Chat Window -->
    <div class="chatroom bg-gray-400">
        <ChatWindow />
    </div>
    <div class="navbar bg-error">
        <!-- <Navbar /> -->
    </div>
    <div class="online bg-green-500">Online</div>
    <div class="footer bg-green-300">Footer</div>
    
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

export default {
    components: { NewChatForm, ChatWindow, Navbar },
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
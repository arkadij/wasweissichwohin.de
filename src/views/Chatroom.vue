<!-- <template>
    <Navbar />
    <NewChatForm />
    <ChatWindow />
</template> -->

<template>
  <div class="chatroom-container">
    <div class="Chatroom bg-gray-400">
        <ChatWindow />
    </div>
    <div class="Logo bg-yellow-400">Logo</div>
    <div class="Header bg-yellow-700">Header</div>
    <div class="navbar">
        <!-- <Navbar /> -->
    </div>
    <div class="Online bg-green-500">Online</div>
    <div class="Footer bg-green-300">Footer</div>
    
    <div class="Input bg-blue-500">
        <div class="options bg-pink-400">options</div>
        <div class="Input-field bg-blue-200">Input field</div>
        <div class="Send bg-purple-600">Send btn</div>

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
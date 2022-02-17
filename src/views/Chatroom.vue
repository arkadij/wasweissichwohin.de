<template>
    <Navbar />
    <NewChatForm />
    <ChatWindow />
</template>

<!-- <template>
  <div class="chatroom-container">
  <div class="Chatroom"></div>
  <div class="Footer"></div>
  <div class="navbar"></div>
  <div class="Logo"></div>
  <div class="Header"></div>
  <div class="Online"></div>
  <div class="Input">
    <div class="Input-field"></div>
    <div class="Send"></div>
    <div class="options"></div>
  </div>
</div>
</template> -->

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
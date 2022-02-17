<template>
    <Navbar />
    <NewChatForm />
    <ChatWindow />
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
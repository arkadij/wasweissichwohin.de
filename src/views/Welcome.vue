<template>
    <div v-if="showLogin">
      <LoginForm @login="enterChat" />
      <p>Create Account<span class="" @click="showLogin = false"> Here </span></p>
    </div>
    <div v-else>
      <SignupForm @signup="enterChat" />
      <p>Log in <span class="" @click="showLogin = true"> Instead </span></p>
    </div>
</template>

<script>

import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { SignupForm, LoginForm },
    setup() {
      const showLogin = ref(true)
      const router = useRouter()

      const enterChat = () => {
        router.push({name: 'Chatroom'})
      }
      return { showLogin , enterChat}
    } 
}
</script>

<style>
   
</style>
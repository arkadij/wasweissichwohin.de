<template>
  <div class="flex h-screen">
    <div class="mx-auto items-center my-auto">
      <div v-if="showLogin">
        <LoginForm @login="enterChat" />
        <div class="text-center pt-2">
          <button @click="showLogin = false"> Show Sign Up</button>
        </div>
      </div>
      <div v-else>
        <SignupForm @signup="enterChat" />
        <div class="text-center pt-2">
          <button @click="showLogin = true"> Swap Log in</button>
        </div>
      </div>
    </div>
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

<style scoped>
   

</style>
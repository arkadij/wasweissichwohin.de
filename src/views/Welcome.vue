<template>
  <div class="flex h-screen">
    <div class="mx-auto items-center my-auto">
      <div v-if="showLogin">
        <LoginForm @login="enterChatroom" />
        <div class="text-center pt-2">
          <button @click="showLogin = false"> Don't have an Account yet? <p class="text-secondary font-heading mt-2 font-medium hover:text-onprimary">Sign up!</p></button>
        </div>
      </div>
      <div v-else>
        <SignupForm @signup="enterChatroom" />
        <div class="text-center pt-2">
          <button @click="showLogin = true"> Already have an Account? <p class="text-secondary font-heading mt-2 ffont-medium hover:text-onprimary">Log in</p></button>
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
      const enterChatroom = () => {
        router.push({name: 'Chatroom'})
      }
      return { showLogin , enterChatroom}
    } 
}
</script>

<style scoped>
   

</style>
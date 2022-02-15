<template>
  <div class="welcome container lg:mx-auto flex-col">
    <div v-if="showLogin">
      <LoginForm @login="enterChat" />
      <p>Create Account<span class="signup" @click="showLogin = false"> Here </span></p>
    </div>
    <div v-else>
      <SignupForm @signup="enterChat" />
      <p>Log in <span class="signup" @click="showLogin = true"> Instead </span></p>
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

<style>
    .welcome{
      text-align: center;
      padding:20px 0;
    }
    .welcome label{
      display:block;
      margin:20px 0 10px;
    }
    .welcome input{
      width:100%;
      padding:10px;
      border-radius: 20px;
      border:1px solid rgb(85, 80, 122);
      margin:10px auto;
    }
    .signup{
      color:aquamarine;
      cursor:pointer;
      text-decoration: underline;
    }
</style>
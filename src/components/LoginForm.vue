<template>
    <form class="w-full max-w-sm" @submit.prevent="handleSubmit">
      <!-- Email -->
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Email
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 
          border-gray-200 rounded w-full py-2 px-4 
          text-gray-700 leading-tight focus:outline-none 
          focus:bg-white focus:border-purple-500" type="email" required placeholder="email" v-model="email">
        </div>
      </div>
      <!-- Password -->
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Password
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 
          border-gray-200 rounded w-full py-2 px-4 
          text-gray-700 leading-tight focus:outline-none 
          focus:bg-white focus:border-purple-500" type="password" required placeholder="password" v-model="password">
        </div>
      </div>
      <div class="error">{{ error }}</div>
      <button class="btn">Log in</button>
  </form>
</template>

<script>

import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin.js'


export default {
     // props & context so we can use .emit
    setup(props, context) {

        const email = ref('')
        const password = ref('')

        const { error, login } = useLogin()
        
        const handleSubmit = async () => {
            await login(email.value, password.value)
            if(!error.value) {
                context.emit('login')
            }
        }

        return { email, password, handleSubmit, error}
    }
}
</script>

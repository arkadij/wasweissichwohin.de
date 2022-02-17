<template>
    <!-- Email input -->
    
    <div class="flex w-full h-full">
      <form class="max-w-sm mx-auto my-auto" @submit.prevent="handleSubmit">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="email">
              Email
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="input-fields-welcome" type="email" required placeholder="email" v-model="email">
          </div>
        </div>
        <!-- Password input -->
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="password">
              Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="input-fields-welcome" type="password" required placeholder="password" v-model="password">
          </div>
        </div>
        <!-- Log in btn -->
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button class="btn">
                Log in
              </button>
            </div>
        </div>
        <!-- Error msg -->
        <div class="md:flex md:items-center pt-8">
          <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <div class="text-red-500 text-sm font-bold uppercase">{{ error }}</div>
            </div>
        </div>
        </form>
    </div>
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

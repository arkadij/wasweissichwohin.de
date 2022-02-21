<template> 
  <form class="w-full max-w-sm" @submit.prevent="handleSubmit">
      <!-- Username-->
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="Username">
            Username
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="input-fields-welcome" type="text" required placeholder="Username" v-model="displayName">
        </div>
      </div>
      <!-- Email -->
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="Email">
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
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="Password">
            Password
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="input-fields-welcome" type="password" required placeholder="password" v-model="password">
        </div>
      </div>
      <!-- SignUp btn -->
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button v-if="!isLoading" class="btn">
              Sign Up
            </button>
            <button v-else disabled class="btn">
              Loading...
            </button>
          </div>
      </div>
      <!-- Error msg -->
        <div class="md:flex md:items-center pt-8">
          <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <div v-if="error" class="error">{{ error }}</div>
            </div>
        </div>
  </form>
      
</template>

<script>

import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'


export default {
     // props & context so we can use .emit
    setup(props, context) {
        const { error, signup, isLoading } = useSignup() // error and signup are the values we return from the useSignup function
        const displayName = ref('')
        const email = ref('')
        const password = ref('')
        
        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            if(!error.value) {
                context.emit('signup')
            }
        }

        return { displayName, email, password, handleSubmit, error, signup, isLoading }
    }
}
</script>

<style>
</style>
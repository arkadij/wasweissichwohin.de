<template>
        <form @submit.prevent="handleSubmit">
            <input type="text" required placeholder="email" v-model="email">
            <input type="password" required placeholder="password" v-model="password">
            <div class="">{{ error }}</div>
            <button class="">Log in</button>
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

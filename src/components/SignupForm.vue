
<template>
        <form @submit.prevent="handleSubmit">
            <input type="text" required placeholder="display name" v-model="displayName"> 
            <input type="text" required placeholder="email" v-model="email">
            <input type="password" required placeholder="password" v-model="password">
            <div class="">{{ error }}</div>
            <button class="">Sign up</button>
        </form>
</template>


<script>

import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'


export default {
     // props & context so we can use .emit
    setup(props, context) {
        const { error, signup } = useSignup() // error and signup are the values we return from the useSignup function
        const displayName = ref('')
        const email = ref('')
        const password = ref('')
        
        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            if(!error.value) {
                context.emit('signup')
            }
        }

        return { displayName, email, password, handleSubmit, error, signup }
    }
}
</script>

<style>

</style>
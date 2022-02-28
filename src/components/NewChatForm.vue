<template>
    <form>
        <textarea class="w-full border-2 border-primary rounded mt-4" 
        placeholder="Message goes brrr"
        v-model="message"
        rows="8"
        @keydown.enter.exact.prevent="handleSubmit"
        @keydown.enter.shift.exact.prevent="text += '\n'"
        >
        </textarea>
        <div class="error">{{ error }}</div>
        <button class="btn" @click.prevent="handleSubmit">Send</button> 
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'
import useCollection from '../composables/useCollection'
export default {
    setup(){
        const { user } = getUser()
        const message = ref('')
        const { addDoc, error } = useCollection('messages')
        const handleSubmit = async () => {
            const chat = {
                name:user.value.displayName,
                message: message.value,
                createdAt: timestamp()
            }
             await addDoc(chat)
             if(!error.value){
                message.value = '' 
            }
        }
        return { handleSubmit, error, message }
    }
}
</script>

<style>

</style>
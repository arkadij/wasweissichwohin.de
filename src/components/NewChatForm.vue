<template>
    <form>
        <textarea class="w-full border-2 border-onprimary100 rounded mt-9" 
        placeholder="Press Enter to Send / Shift + Enter for a new Line"
        v-model="message"
        rows="8"
        @keyup.enter.shift.exact.prevent="text += '\n'"
        @keydown.enter.exact.prevent="handleSubmit"
        >
        </textarea>
        <div class="error">{{ error }}</div>
        <button class="font-heading border-2 w-auto px-6 mb-1 border-secondary border-solid hover:border-onprimary" @click.prevent="handleSubmit">Send</button> 
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
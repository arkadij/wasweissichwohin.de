<template>
    <form>
        <textarea placeholder="Message goes brrr"
        v-model="message"
        @keypress.enter.prevent="handleSubmit"
        >
        </textarea>
        <div class="error">{{ error }}</div>
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" @click.prevent="handleSubmit">Send</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import { projectFirestore, timestamp } from '../firebase/config'
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
        
        return { handleSubmit, error, message}
    }
}
</script>

<style scoped>

</style>
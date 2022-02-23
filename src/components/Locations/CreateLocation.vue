<template>
    <form @submit.prevent="handleSubmit">
        <div>
            <!-- Title -->
            <div>
                <label for="Title">Title</label>
                <input type="text" required 
                placeholder="Title"
                 v-model="title">
            </div>
            <!-- Description -->
            <div>
                <label for="Description"></label>
                <textarea required 
                placeholder="Additional information"
                v-model="description"
                ></textarea>
            </div>
            <!-- Image upload -->
            <div>
                <label for="File">Upload Image of Location</label>
                <input type="file" @change="handleChange">
                <div class="error">{{ fileError }}</div>
            </div>
            <div class="error"></div>
            <button v-if="!isLoading" class="btn">Create</button>
            <button v-else disabled class="btn">Creating...</button>
        </div>
    </form>
</template>

<script>

import useStorage from '@/composables/useStorage.js'
import useCollection from '@/composables/useCollection.js'
import getUser from '../../composables/getUser'

import { ref } from 'vue'
import { timestamp } from '@/firebase/config.js'
import { useRouter } from 'vue-router'

// Feature: Add input field for 52.4838071372108, 13.394362382077352 

export default {
    setup(){
        const { filePath, url, addImg } = useStorage()
        const { error, addDoc} = useCollection('locations')
        const { user } = getUser()
        const title = ref('')
        const description = ref('')
        const file = ref(null)
        const fileError = ref(null)
        const isLoading = ref(false)
        const router = useRouter()

        const handleSubmit = async () => {
            if(file.value) {
                isLoading.value = true
                await addImg(file.value)
                const res = await addDoc({
                    title: title.value,
                    description: description.value,
                    userId: user.value.uid,
                    userName: user.value.displayName,
                    locationUrl: url.value,
                    filePath: filePath.value,
                    locations: [],
                    createdAt: timestamp()
                })
                if(!error.value){
                    router.push({ name: 'LocationDetails', params: { id: res.id }})
                }
                isLoading.value = false
            }
        }

        const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']
        

        const handleChange = (e) => {
            const selected = e.target.files[0]
            if(selected && types.includes(selected.type)){
                file.value = selected
            } else {
                file.value = null
                fileError.value = 'Files allowed: PNG, JPG, WebP'
            }
            console.log(e.target.files)
        }

        return {handleSubmit, title, description, handleChange, fileError, isLoading}
    }
    
}
</script>

<style>

</style>
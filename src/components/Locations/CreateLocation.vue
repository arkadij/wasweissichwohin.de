<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col w-full mt-2 mr-2 border-2 rounded-md shadow-md">
        <div class="flex-wrap flex flex-col">
            <!-- Title -->
            <div class="flex flex-col">
                <label for="Title" class="flex-col">Title</label>
                <input type="text" required 
                placeholder="Title"
                v-model="title"
                 
                 >
            </div>
            <!-- Description -->
            <div class="flex-col bg-red-200">
                <label for="Description"></label>
                <textarea class="w-full"
                v-model="description"
                rows="8"
                placeholder="Description / Additional information about the location"
                
                ></textarea>
            </div>
            <!-- Image upload -->
            <div class="bg-green-200 flex flex-row p-2 items-center">
                <label for="File" class="m-2">Upload Image of Location</label>
                <input type="file" @change="handleChange">
                <div class="error">{{ fileError }}</div>
            </div>
            <!-- Checkboxes for more information
            <div class="bg-green-200 flex flex-col p-4">
                <input type="checkbox" class="checked:bg-blue-500" value="Smoking allowed">
            </div> -->
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

// Add Feature: Add input field for 52.4838071372108, 13.394362382077352 
// Add Checkboxes for more information.

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
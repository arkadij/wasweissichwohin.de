<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col mb-2 w-full  p-4">
        <div class="flex-wrap flex flex-col">
            <!-- Title -->
            <div class="md:block md:items-center">
                <div class="md:w-1/3 flex-inline mb-4">
                    <input 
                    class="input-fields-create"
                    type="text" required 
                    placeholder="Title"
                    v-model="title"
                    >
                    <input 
                    class="input-fields-create"
                    type="text" required 
                    placeholder="Kiez"
                    v-model="kiez"
                    >
                    <input type="checkbox" class="checked:bg-primary" value="Smoking allowed">
                </div>
            </div>
            <!-- Description -->
            <div class="md:block md:items-center mb-4">
                <textarea class="input-fields-create"
                v-model="description"
                rows="8"
                placeholder="Description / Additional information about the location"
                
                ></textarea>
            </div>
            <!-- Image upload -->
            <div class="bg-onprimary100 flex flex-row p-2 items-center rounded mb-4">
                <label for="File" class="m-2">Upload Image of Location</label>
                <input type="file" class="hover:file:bg-violet-100" @change="handleChange">
                <div class="error">{{ fileError }}</div>
            </div>
            <!-- Checkboxes for more information
            <div class="bg-green-200 flex flex-col p-4">
                
            </div> -->
            <div class="error"></div>
            <button v-if="!isLoading" class="md:w-1/3 font-heading border-2 border-secondary border-solid hover:border-onprimary">Create</button>
        <button v-else disabled class="md:w-1/3 font-heading border-2 border-secondary border-solid hover:border-onprimary">Creating...</button>
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
        const kiez = ref('')
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
                    kiez: kiez.value,
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

        return {handleSubmit, title,kiez, description, handleChange, fileError, isLoading}
    }
    
}
</script>

<style>

</style>
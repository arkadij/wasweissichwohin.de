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
            <button class="btn">Create</button>
        </div>
    </form>
</template>

<script>

import { ref } from 'vue'
import useStorage from '@/composables/useStorage.js'

export default {
    setup(){
        const { filePath, url, addImg } = useStorage()

        const title = ref('')
        const description = ref('')
        const file = ref(null)
        const fileError = ref(null)


        const handleSubmit = async () => {
            if(file.value) {
                await addImg(file.value)
                console.log('img uploaded', url.value)
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

        return {handleSubmit, title, description, handleChange, fileError}
    }
    
}
</script>

<style>

</style>
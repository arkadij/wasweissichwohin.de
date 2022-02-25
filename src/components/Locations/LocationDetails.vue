<template>
  <div class="error" v-if="error">{{ error }}</div>
  <div v-if="location" class="location-details">

    <!-- location information -->
    <div class="location-info">
      <div class="cover">
        <img :src="location.locationUrl">
      </div>
      <h2>{{ location.title }}</h2>
      <p class="username">Created by {{ location.userName }}</p>
      <p class="description">{{ location.description }}</p>
      <button class="btn" @click="handleDelete()" v-if="ownership">Delete location</button>
      
    </div>
  </div>
</template>

<script>

import getDocument from "@/composables/getDocument.js"
import useDocument from "@/composables/useDocument"
import getUser from "@/composables/getUser.js"
import { computed } from 'vue'
import useStorage from "../../composables/useStorage"
import { useRouter } from "vue-router"

export default {
  props: ['id'],
  setup(props) {
    const { error, document: location } = getDocument('locations', props.id)
    const { user } = getUser()
    const { removeDoc, isLoading } = useDocument('locations', props.id)
    const { deleteImg } = useStorage()
    const router = useRouter()

    const ownership = computed(() => {
      return location.value 
        && user.value 
        && user.value.uid == location.value.userId
    })

    const handleDelete = async () => {
      await deleteImg(location.value.filePath)
      await removeDoc()
        if(error.value){
          router.push({ name: 'Locations'})
        }
    }
    return { error, location, ownership, removeDoc, isLoading, deleteImg, handleDelete }
  }
}
</script>

<style>
  
</style>
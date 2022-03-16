<template>
  <div class="flex m-2 w-full p-4 bg-primary">
    <div class="flex flex-col">
      <div class="error" v-if="error">{{ error }}</div>
        <div v-if="location" class="location-details">
        <!-- location Detail -->
        <div class="flex flex-col">
          <div class="flex h-48 w-48 flex-shrink-0">
            <img :src="location.locationUrl">
          </div>
        
          <div class="">
            <h2>{{ location.title }}</h2>
                <p class="username"> {{ location.kiez.name }} </p>
                <p class="username">Created by {{ location.userName }}</p>
                <p class="description">{{ location.description }}</p>
          </div>
          <button class="md:w-1/3 font-heading border-2 border-secondary border-solid hover:border-onprimary" @click="handleDelete()" v-if="ownership">Delete location</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import getDocument from "@/composables/getDocument.js"
import useDocument from "@/composables/useDocument"
import useStorage from "@/composables/useStorage"
import getUser from "@/composables/getUser.js"
import { computed } from 'vue'
import { useRouter } from "vue-router"

export default {
  props: ['id'],
  setup(props) {
    const { error, document: location } = getDocument('locations', props.id)
    const { removeDoc, isLoading } = useDocument('locations', props.id)
    const { user } = getUser()
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
    return { error, 
             location, 
             ownership, 
             removeDoc, 
             isLoading, 
             deleteImg, 
             handleDelete, 
            }
  }
}
</script>


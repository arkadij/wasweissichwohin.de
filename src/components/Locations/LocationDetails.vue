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
      <button class="btn" v-if="ownership">Delete location</button>
    </div>
  </div>
</template>

<script>

import getDocument from "@/composables/getDocument.js"
import getUser from "@/composables/getUser.js"
import { computed } from 'vue'

export default {
  props: ['id'],
  setup(props) {
    const { error, document: location } = getDocument('locations', props.id)
    const { user } = getUser()

    const ownership = computed(() => {
      return location.value 
        && user.value 
        && user.value.uid == location.value.userId
    })
    return { error, location, ownership }
  }
}
</script>

<style>
  
</style>
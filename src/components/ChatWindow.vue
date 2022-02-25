<template>
  <div class="flex-wrap mt-2 p-4 w-full h-full box-content overflow-auto bg-gray-100 rounded-md shadow-md">
      <div class="error" v-if="error">{{ error }}</div>
      <div v-if="documents" class="h-full overflow-auto" ref="messages">
          <div v-for="doc in formattedDocuments" 
          :key="doc.id" 
          class="my-2">
              <span class="block text-gray-400 text-xs">{{ doc.createdAt}}</span>
              <span class="text-secondary font-bold mr-1">{{ doc.name }}</span>
              <span class="text-primary">{{doc.message}}</span>
          </div>
      </div>
  </div>
</template>

<script>

import getCollection from "../composables/getCollection"
import { formatDistanceToNow } from 'date-fns'
import { computed, ref, onUpdated } from 'vue'

export default {
    setup(){
        const {error, documents} = getCollection('messages')
        const formattedDocuments = computed(() => {
            if(documents.value) {
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return {...doc, createdAt: time}
                })
            }
        })
        const messages = ref(null)
        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight
            })
        return { error, documents, formattedDocuments, messages }
    }
}
</script>

<style>

</style>
<template>
  <div class="dark flex-wrap p-4 w-full h-full box-content overflow-auto bg-primary rounded-md">
      <div class="error" v-if="error">{{ error }}</div>
      <div v-if="documents" class="h-full overflow-auto" ref="messages">
          <div v-for="doc in formattedDocuments" 
          :key="doc.id" 
          class="my-2">
              <span class="block text-gray-300 text-xs">{{ doc.createdAt}}</span>
              <span class="text-beige font-bold mr-1">{{ doc.name }}</span>
              <span class="text-white">{{doc.message}}</span>
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
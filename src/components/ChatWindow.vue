<template>
  <div class="flex-wrap p-4 w-full h-full mt-2 overflow-auto box-content border-2 bg-gray-100 border-onprimary100 rounded-md shadow-md">
      <div class="error" v-if="error">{{ error }}</div>
      <div v-if="documents" class="h-full" ref="messages">
          <div v-for="doc in formattedDocuments" 
          :key="doc.id" 
          class="my-2 font-heading">
              <span class="block text-onprimary100 text-xs">{{ doc.createdAt}}</span>
              <span class="text-secondary font-semibold mr-1">{{ doc.name }}</span>
              <span class="text-onprimary">{{doc.message}}</span>
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
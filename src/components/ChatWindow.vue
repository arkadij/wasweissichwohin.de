<template>
  <div class="">
      <div class="error" v-if="error">{{error}}</div>
      <div v-if="documents" class="messages" ref="container">
          <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
              <span class="">{{ doc.createdAt }}</span>
              <span class="">{{ doc.name }} :</span>
              <span class="">{{doc.message}}</span>
          </div>
      </div>
  </div>
</template>

<script>

import getCollection from "../composables/getCollection"
import { formatDistanceToNow } from 'date-fns'
import { computed, ref } from '@vue/reactivity'
import { onUpdated } from '@vue/runtime-core'

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
        //auto scroll
        const container = ref(null)
        onUpdated(() => {
            container.value.scrollTop = container.value.scrollHeight
        })
        
        return {error, documents, formattedDocuments, container}
    }
}
</script>

<style>

</style>
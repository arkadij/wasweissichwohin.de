<!-- Check getCollection, maybe we can use the Snapshot method. 
Make a new db and store display name etc.,
 then get it to display all users currently logged in
 onAuthStateChanged
-->


<template>
    <div class="w-full mt-2 mr-2 border-2 rounded-md shadow-md">
        <h2 class="font-semibold pl-2 pt-1 pb-1 border-b-2 border-grey-400 bg-green-200">Users online</h2>
        <ul>
            <li>{{  }}</li>
        </ul>   
    </div>
</template>

<script>

import getUser from "../composables/getUser.js"
import getCollection from "../composables/getCollection.js"

export default {
    setup(){
        const { user } = getUser()
    
         return { user }            
    }
}
</script>

<style>

</style>
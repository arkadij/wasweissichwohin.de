<!-- Check getCollection, maybe we can use the Snapshot method. 
Make a new db and store display name etc.,
 then get it to display all users currently logged in
 onAuthStateChanged
-->


<template>
    <div class="w-full mt-2 mr-2 border-2 rounded-md shadow-md">
        <h2 class="font-medium font-heading pl-2 pt-1 pb-1 border-b-2 border-gray-100 bg-primary">Users online</h2>
        <ul>
            <li class="p-2 font-heading text">{{ user.displayName  }}</li>
        </ul>   
    </div>
</template>

<script>

import getUser from "../composables/getUser.js"

export default {
    setup(){
        const { user } = getUser()
    
         return { user }            
    }
}
</script>

<style>

</style>
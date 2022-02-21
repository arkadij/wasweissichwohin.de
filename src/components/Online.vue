<!-- Check getCollection, maybe we can use the Snapshot method. 
Make a new db and store display name etc.,
 then get it to display all users currently logged in
-->


<template>
    <div class="dark bg-primary w-full">
        <h2 class="bg-green-400 w-full pl-2">Users online</h2>
        <ul>
            <li class="text-beige pl-2">{{  }}</li>
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
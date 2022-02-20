<!-- Check getCollection, maybe we can use the Snapshot method. 
Store all logged in users in an array like in results? 
getAllUsers composable maybe? and then display all users as list with v-for?
-->


<template>
    <div class="dark bg-primary w-full">
        <h2 class="bg-green-400 w-full pl-2">Users online</h2>
        <ul>
            <li class="text-beige pl-2">{{ user.displayName }}</li>
        </ul>   
    </div>
</template>

<script>

import getUser from "../composables/getUser"


export default {
    setup(){
        const { user } = getUser()
    
         return { user }            
    }
}
</script>

<style>

</style>
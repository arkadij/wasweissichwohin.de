<template>
    <div class="h-full w-full bg-primary text-white shadow-lg">
        <router-link class="navbar-icon" to="/chatroom">
            Chatroom
        </router-link>
        <router-link class="navbar-icon" to="/locations">
            Locations
        </router-link>
        <router-link class="navbar-icon" to="/locations/create">
            Create
        </router-link>
        <div class="items-end">
            <button class="navbar-icon btn" @click="handleClick">Logout</button>
        </div>
    </div>
</template>
<script>

import { useRouter } from "vue-router"
import getUser from "../composables/getUser.js"
import useLogout from "../composables/useLogout.js"

export default {
    setup() {
        const { user } = getUser()
        const { logout, error } = useLogout()
        const router = useRouter()

        const handleClick = async () => {
            await logout()
            if(!error.value){
                router.push({ path: '/'})
            }
        }
        return { handleClick, user }
    }
}
</script>

<style>

</style>
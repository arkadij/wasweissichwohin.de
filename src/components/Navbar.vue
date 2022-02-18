<template>
    <div class="h-full w-full bg-primary text-white shadow-lg">
        <router-link to="/chatroom">
            <ChatIcon class="navbar-icon" />
        </router-link>
        <router-link to="/locations">
            <MapIcon class="navbar-icon" />
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
import { ChatIcon, MapIcon} from '@heroicons/vue/solid'

export default {
    components: { ChatIcon, MapIcon },
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
<!--
<template>
    <nav class="flex items-end align-middle flex-wrap bg-green-300 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <BeakerIcon class="h-5 w-5 text-blue-500" />
        </div>
        <div>
            <p class=""> Hello, {{user.displayName}}</p>
        </div>    
        <div>    
            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" @click="handleClick">Logout</a>
        </div>
    </nav>
</template>
-->
<template>
    <div class="fixed top-0 left-0 h-screen w-18 bg-gray-800 flex flex-col text-white shadow-lg">
        <div>
            <BeakerIcon class="navbar-icon" />
        </div>
        <div>
            <ChatIcon class="navbar-icon" />
        </div>
        <div>
            <MapIcon class="navbar-icon" />
        </div>
        <div>
            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" @click="handleClick">Logout</a>
        </div>
    </div>
</template>



<script>

import { useRouter } from "vue-router"
import getUser from "../composables/getUser.js"
import useLogout from "../composables/useLogout.js"
import { BeakerIcon, ChatIcon, MapIcon} from '@heroicons/vue/solid'

export default {
    components: { BeakerIcon, ChatIcon, MapIcon },
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
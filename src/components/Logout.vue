<template>
     <div class="w-full">
        <div class="flex items-center justify-center">
            <button class="btn" @click="handleClick">Logout</button>
        </div>
        <div class="flex items-center justify-center ">
            <button class="btn" @click="darkMode">Dark Mode</button>
        </div>
    </div>    
</template>

<script>
import useLogout from "../composables/useLogout"
import { useRouter } from "vue-router"

export default {
    setup(){
        const { logout, error } = useLogout()
        const router = useRouter()

        const handleClick = async () => {
            await logout()
            if(!error.value){
                router.push({ path: '/'})
            }
        }
        const darkMode = () => {

        }
        return { handleClick, darkMode }
    }
}
</script>

<style>

</style>
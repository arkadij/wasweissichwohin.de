<template>
    <div>
        <p class="username"> Logged in: {{user.displayName}}</p>
    </div>
    <button class="basic-btn" @click="handleClick">Logout</button>
</template>

<script>import { useRouter } from "vue-router"
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
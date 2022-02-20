import {ref} from 'vue'
import {projectAuth} from '../firebase/config.js'

const error = ref(null)
const isLoading = ref(false)

const logout = async () => {
    error.value = null
    isLoading.value = true
    try{
        await projectAuth.signOut()
        isLoading.value = false 
    }
    catch(err){
        error.value = err.message
        isLoading.value = false
    }
}
const useLogout = () => {
    return { error, logout, isLoading}
}

export default useLogout
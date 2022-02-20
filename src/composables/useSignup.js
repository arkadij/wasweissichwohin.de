import {ref} from 'vue'
import {projectAuth} from '../firebase/config.js'

const error = ref(null)
const isLoading = ref(false)

// function to actually sign up people, it doesn't need to be declared in useSignup
const signup = async (email, password, displayName) => { 
    error.value = null //resets the error value
    isLoading.value = true
    try {
        isLoading.value = false
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if (!res){
            throw new Error('Could not complete Sign up')
        }
        await res.user.updateProfile({ displayName })
        error.value = null
        // in case we need the response obj later
        return res 
    }catch(err){
        console.log(err.message)
        error.value = err.message
        isLoading.value = false
    }
}
// don't want to invoke that function on signup
const useSignup = () => {
    return { error, signup, isLoading }
}

export default useSignup
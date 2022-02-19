import {ref} from 'vue'
import {projectAuth} from '../firebase/config.js'

const error = ref(null)

// function to actually sign up people, it doesn't need to be declared in useSignup
const signup = async (email, password, displayName) => { 
    error.value = null //resets the error value
    
    try {
        // res = response
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
    }
}
// don't want to invoke that function on signup
const useSignup = () => {
    return { error, signup }
}

export default useSignup
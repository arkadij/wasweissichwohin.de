import {ref} from 'vue'
import {projectAuth} from '../firebase/config.js'

// get the current user state
const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(_user => {
    user.value = _user
})
const getUser = () => {
    return { user }
}

export default getUser
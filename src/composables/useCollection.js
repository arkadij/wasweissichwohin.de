import {ref} from 'vue'
import { projectFirestore } from '../firebase/config'



const useCollection = (collection) => {
    // declare error in fuction because every collection needs own error, 
    // because there might be different errors (like posts, users etc.)
    const error = ref(null)
    const isLoading = ref(false)

    const addDoc = async (doc) => {
        error.value = null
        isLoading.value = true
        try{        
            await projectFirestore.collection(collection).add(doc)
            isLoading.value = false
        }
        catch(err){
            console.log(err.message)
            error.value = 'could not send msg'
            isLoading.value = false
        }
    }
    return {error, addDoc, isLoading}
}

export default useCollection

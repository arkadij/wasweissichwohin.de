import {ref} from 'vue'
import { projectFirestore } from '../firebase/config'



const useDocument = (collection, id) => {
    // declare error in fuction because every collection needs own error, 
    // because there might be different errors (like posts, users etc.)
    const error = ref(null)
    const isLoading = ref(false)

    let docRef = projectFirestore.collection(collection).doc(id)

    const removeDoc = async () => {
        error.value = null
        isLoading.value = true
        try{        
            const res = await docRef.delete()
            isLoading.value = false
            return res
        }
        catch(err){
            console.log(err.message)
            error.value = 'could not delete location'
            isLoading.value = false
        }
        
    }
    return {error, removeDoc, isLoading }
}

export default useDocument

import {ref} from 'vue'
import { projectFirestore } from '../firebase/config'



const useCollection = (collection) => {
    // declare error in fuction because every collection needs own error, 
    // because there might be different errors (like posts, users etc.)
    const error = ref(null)

    const addDoc = async (doc) => {
        error.value = null

        try{
            await projectFirestore.collection(collection).add(doc)
        }
        catch(err){
            console.log(err.message)
            error.value = 'could not send msg'
        }
    }
    return {error, addDoc}
}

export default useCollection

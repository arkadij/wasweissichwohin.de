import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'




const getDocument = (collection, id) => {
    const error = ref(null)
    const documents = ref(null)

    let documentRef = projectFirestore.collection(collection).doc(id)
    
    //realtime listener to the firebase db
    const unsub = documentRef.onSnapshot((snap) => {
        if(doc.data()) {
            document.value = {...doc.data(), id: doc.id}
            error.value = null
        } else {
            error.value = 'Document 404'
        }
          
       
    }, (err) => {
        console.log(err.message)
        error.value = 'could not fetch the doc'
    })
   
    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })
    return { document, error }
}

export default getDocument
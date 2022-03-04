import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getDocument = (collection, id) => {
    let error = ref(null)
    let document = ref(null)

    let documentRef = projectFirestore.collection(collection).doc(id)
    
    const unsub = documentRef.onSnapshot(doc => {
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
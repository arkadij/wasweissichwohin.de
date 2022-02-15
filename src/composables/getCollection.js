import {ref} from 'vue'
import { projectFirestore } from '../firebase/config'
import { watchEffect } from 'vue'

const getCollection = (collection) => {
    const error = ref(null)
    const documents = ref(null)

    let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')
    
    //realtime listener to the firebase db
    const unsub = collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            // doc.data().createdAt, otherwise it uses local version of timestamp
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id})
        })
        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch data'
    })
    //unsubscribe Snapshots [componenet unmount]
    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })
    return { documents, error }
}

export default getCollection
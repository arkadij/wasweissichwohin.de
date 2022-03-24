import { projectDatabase, 
         projectAuth, 
         timestamp} from '../firebase/config'
import { ref } from 'firebase/database'         


const getPresence = (collection) => {
    const uid = projectAuth.currentUser.uid
    
    const error = ref(null)
    const usersOnline = ref(null)
    
    // ** DATABASE ** //
    // Create a reference to this user's specific status node.
    // This is where we will store data about being online/offline.
    // var userStatusDatabaseRef = projectDatabase.ref('/status/' + uid)
    let userStatusDatabaseRef = projectDatabase.ref('/status/' + uid)

    // We'll create two constants which we will write to 
    // the Realtime database when this device is offline / online
    let isOfflineForDatabase = {
        state: 'offline',
        last_changed: timestamp,
    }
    let isOnlineForDatabase = {
        state: 'online',
        last_changed: timestamp,
    }
    // Create a reference to the special '.info/connected' path in 
    // Realtime Database. This path returns `true` if connected else `false`

    projectDatabase.ref('.info/connected').on('value',snap => {
        // If we're not currently connected, don't do anything.
        if (snap.val() == false) {
            return
        }
        userStatusDatabaseRef.onDisconnect()
        .set(isOfflineForDatabase)
        .then(() => {
            userStatusDatabaseRef.set(isOnlineForDatabase);
        })
    })

    return { error, usersOnline }    
}
export default getPresence
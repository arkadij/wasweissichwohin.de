
// projectDatabase == realtimeDb
import { projectDatabase, projectAuth } from "@/firebase/config";

import {
	onDisconnect,
	onValue,
	ref,
	serverTimestamp,
	set
} from 'firebase/database'

const getFirebase = () => {
     const firebaseListener = onValue
     const uid = projectAuth.currentUser.uid
     

     const userStatusRef = uid => {
        return ref(projectDatabase, '/status/' + uid)
    }

     const updateUserOnlineStatus = currentUserId => {
        const isOfflineData = {
            state: 'offline',
            lastChanged: serverTimestamp()
        }

        const isOnlineData = {
            state: 'online',
            lastChanged: serverTimestamp()
        }

        const connectedRef = ref(projectDatabase, '.info/connected')

        onValue(connectedRef, snap => {
            
            if (snap.val() === true) {
                onDisconnect(userStatusRef(currentUserId))
                    .set(isOfflineData)
                    .then(() => {
                        set(userStatusRef(currentUserId), isOnlineData)
                    })
            }
        })
    }
    return { userStatusRef }
}
export default getFirebase   
  

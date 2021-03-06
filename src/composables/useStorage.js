import { ref } from "vue";
import { projectStorage } from "../firebase/config";
import getUser from './getUser.js'

const { user } = getUser()

const useStorage = () => {
    const error = ref(null)
    const url = ref(null)
    const filePath = ref(null)
    const isLoading = ref(false)

    const addImg = async (file) => {
        error.value = null
        isLoading.value = true
        filePath.value = `locations/${user.value.uid}/${file.name}`
        const storageRef = projectStorage.ref(filePath.value)
        
        try {
            const res = await storageRef.put(file)
            url.value = await res.ref.getDownloadURL()
            isLoading.value = false
        } 
        catch (err) {
            error.value = err.message
            console.log(err.message)
            isLoading.value = false
        }
    }

    const deleteImg = async (path) => {
        const storageRef = projectStorage.ref(path)

        try {
            await storageRef.delete()
            
        } catch (err){
            error.value = err.message
        }
    }


    return { error, url, filePath, isLoading, addImg, deleteImg }
}


export default useStorage
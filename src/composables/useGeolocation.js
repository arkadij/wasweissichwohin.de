// ON HOLD, ill try a different way


import { onUnmounted, onMounted, ref } from 'vue'

export function useGeoloaction() {
    const coords = ref({ latidude: 0, longitude: 0})
    const isSupported = 'navigator' in window && 'geolocation' in navigator

    let watcher = null
    onMounted(() => {
        if(isSupported)
            watcher = navigator.geolocation.watchPosition(
                position => (coords.value = position.coords)
            )
    })
    onUnmounted(() => {
        if (watcher) navigator.geolocation.clearWatch(watcher)
    })
    return { coords, isSupported }
}
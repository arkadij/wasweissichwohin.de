import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './assets/main.css'
import { projectAuth } from './firebase/config'
import { createApp } from 'vue'


let app

projectAuth.onAuthStateChanged(() => {
    if(!app) {
         app =  createApp(App)
        .use(router)
        .mount('#app')
    }
})

// setup sentry 
// app.config.Vue.config.errorHandler = function (err, vm, info) {
//     // handle error
// }
// app.config.Vue.config.performance = true
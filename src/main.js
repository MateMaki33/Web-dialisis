/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
    BiGithub,
    BiInstagram,
    BiYoutube,
    BiLinkedin,

} from 'oh-vue-icons/icons'

import HeaderComponent from './components/HeaderComponent.vue'
import NavPrincipal from './components/NavPrincipal.vue'
import FooterComponent from './components/FooterComponent.vue'
import router from './router'
import '@/assets/bootstrap.min.css'
import '@/assets/bootstrap.bundle.min.js'



addIcons(BiGithub, BiInstagram, BiYoutube, BiLinkedin);

const app=createApp(App)
app.use(router).mount('#app');


createApp(HeaderComponent).use(router).mount('#headerapp')
createApp(NavPrincipal).use(router).mount('#navapp')

const footer=createApp(FooterComponent)
footer.component('v-icon', OhVueIcon)
footer.use(router)
footer.mount('#footerapp')

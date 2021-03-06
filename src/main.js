import { createApp } from 'vue'

import router from './router'
import store from './store'


import App from './App.vue'
import './index.css'

import { library }              from '@fortawesome/fontawesome-svg-core'
import { fas }                  from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon }      from '@fortawesome/vue-fontawesome'

library.add(fas)

const app = createApp(App)
app.use(router)
app.use(store)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');

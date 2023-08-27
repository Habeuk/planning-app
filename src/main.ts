import './assets/scss/main.scss'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import { app_id, route_schedule } from './app-config'
import { usePlanningStore } from './stores/planning'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
const application = document.getElementById(app_id)
const app = createApp(App)
app.use(createPinia())
//
const store = usePlanningStore()
if (application && application.getAttribute(route_schedule)) {
  store.route_schedule = application.getAttribute(route_schedule)
  store.loadReservation()
}
//
app.use(PrimeVue)

app.mount('#app')

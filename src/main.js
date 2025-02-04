// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

// Api
import gemini from './plugins/gemini'
import unsplashPlugin from './plugins/unsplash'
import exchangeRate from './plugins/exchange_rate'
import clima from './plugins/clima'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
})

const app = createApp(App)

app.use(router)
app.use(unsplashPlugin, {
  apiKey: import.meta.env.VITE_UNSPLASH_API_KEY,
})
app.use(gemini, {
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
})
app.use(exchangeRate, {
  apiKey: import.meta.env.VITE_EXCHANGE_RATE_API_KEY,
})
app.use(clima, {
  apiKey: import.meta.env.VITE_CLIMA_API_KEY,
})
app.use(vuetify)

app.mount('#app')

import { Transition, createApp } from 'vue'
import { Dialog, Quasar, Ripple } from 'quasar'
import quasarLang from 'quasar/lang/pt-BR'
import quasarIconSet from 'quasar/icon-set/material-icons-outlined'
import router from './router'
import App from './App.vue'

import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import 'quasar/src/css/index.sass'
import '@/assets/style.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)
app.component('Transition', Transition)
app.use(Quasar, {
  plugins: { Dialog }, // import Quasar plugins and add here
  lang: quasarLang,
  iconSet: quasarIconSet,
  config: {
    brand: {
      primary: '#007db3',
      secondary: '#86BC25',
      accent: '#9C27B0',
      dark: '#1D1D1D',
      positive: '#21BA45',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037',
    },
  },
})
app.directive('ripple', Ripple)
app.use(router)

app.mount('#app')

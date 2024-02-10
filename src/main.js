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
  plugins: { Dialog },
  lang: quasarLang,
  iconSet: quasarIconSet,
  config: {
    brand: {
      primary: '#001d90',
      secondary: '#3a8000',
      accent: '#2f4f4f',
      dark: '#171717',
      positive: '#27893e',
      negative: '#8b0f1d',
      info: '#26a4be',
      warning: '#ffd700',
    },
  },
})
app.directive('ripple', Ripple)
app.use(router)

app.mount('#app')

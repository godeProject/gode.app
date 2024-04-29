import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClipboard, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

library.add(faClipboard)
library.add(faMoon)
library.add(faSun)

config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
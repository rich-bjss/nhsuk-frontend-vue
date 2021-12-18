// Import vue components
import '../node_modules/nhsuk-frontend/dist/nhsuk.css'
import '../node_modules/nhsuk-frontend/packages/polyfills'

import * as components from './components'

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return
  install.installed = true
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

// Create module definition for Vue.use()
const plugin = {
  install,
}

// To auto-install when vue is found
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

// Default export is library as a whole, registered via Vue.use()
export default plugin

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from './components'
import Vue from "vue"
import VueRouter from "vue-router"

import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"

import App from "./App"
import JobApplication from "./components/JobApplication/JobApplication"
import Admin from "./components/Admin/Admin"
import Login from "./components/Admin/Login"

library.add(faCheckCircle)
library.add(faStar)
Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  { path: "/", component: JobApplication },
  { path: "/admin", component: Admin },
  { path: "/login", component: Login },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/scss/styles.scss'
import DefaultLayout from '~/layouts/Default.vue'
import FrontPage from '~/layouts/FrontPage.vue'
import StuffIUse from '~/layouts/StuffIUse.vue'
import VueFuse from 'vue-fuse'

// Adding FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faDribbble, faInstagram, faLinkedin, faProductHunt, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = true;
library.add(faGithub, faTwitter, faDribbble, faInstagram, faLinkedin, faProductHunt, faMedium, faAdjust)

export default function (Vue, { router, head, isClient }) {
  Vue.use(VueFuse)
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=EB+Garamond:ital@0;1&family=Josefin+Sans:wght@300;400&display=swap'
  })
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  
  // Import FontAwesome
  Vue.component('font-awesome', FontAwesomeIcon)
}

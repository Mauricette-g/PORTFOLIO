import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import AboutMe from '@/components/AboutMe.vue'
import Contact from '@/components/Contact.vue'
import Projets from '@/components/Projets.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: HomeView,
      meta: {
        title: 'Mauricette - Potfolio'
      },
    },

    { 
      path: '/apropos', 
      name: 'A propos', 
      component: AboutMe,
      meta: {
        title: 'Mauricette - Potfolio A propos'
      },
    },

    { 
      path: '/projet', 
      name: 'Projets', 
      component: Projets,
      meta: {
        title: 'Mauricette - Potfolio Projets'
      },
    },


    { 
      path: '/contact', 
      name: 'Contact', 
      component: Contact,
      meta: {
        title: 'Mauricette - Potfolio Contact'
      },
    },

    
    { 
      path: '/:pathMatch(.*)*', 
      name: 'not-found', 
      component: NotFound,
      meta: {
        title: 'Page non trouvée - Erreur 404'
      }
    },
    
  ],

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 90,
      }
    }else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title= to.meta.title
  next()
})

export default router
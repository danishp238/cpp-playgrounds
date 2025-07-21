import { createRouter, createWebHistory } from 'vue-router'
import Banner from '@/components/Banner.vue'
import BlogPage from '../views/BlogPage.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import AboutUs from '@/views/AboutUs.vue'
import ContactUs from '@/views/ContactUs.vue'

NProgress.configure({ showSpinner: false })


const router = createRouter({
  history: createWebHistory('/'),
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top on route change
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: Banner
    },

    {
      path: '/about-cpp-playgrounds',
      name: 'AboutUs',
      component: AboutUs
    },

    {
      path: '/contact-cpp-playgrounds',
      name: 'ContactUs',
      component: ContactUs
    },

    {
      path: '/blogs/:slug',
      name: "BlogPage",
      component: BlogPage
    }
  ],

     scrollBehavior() {
    return { top: 0 }
  }
})

// Show progress on route change start
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

// Hide progress when route is done
router.afterEach(() => {
  NProgress.done()
})

router.afterEach((to) => {
  gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: to.fullPath,
  });
});



export default router

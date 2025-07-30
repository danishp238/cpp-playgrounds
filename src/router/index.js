import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import Banner from '@/components/Banner.vue'
import BlogPage from '../views/BlogPage.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import AboutUs from '@/views/AboutUs.vue'
import ContactUs from '@/views/ContactUs.vue'
import projects from '@/assets/projects.js'

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
      component: AboutUs,
      meta: {title: 'About Us | cpp-playgrounds'}
    },

    {
      path: '/contact-cpp-playgrounds',
      name: 'ContactUs',
      component: ContactUs,
      meta: {title: 'Contact US | cpp-playgrounds'}
    },

    {
      path: '/blogs/:slug',
      name: "BlogPage",
      component: BlogPage,
      meta: {title: ''} // here i want to dynamically fetch the blog's title
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

router.afterEach((to, from) => {
  nextTick(() => {
    let pageTitle = 'cpp-playgrounds'

    // 1. Check static meta.title
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
    if (nearestWithTitle && nearestWithTitle.meta.title) {
      pageTitle = nearestWithTitle.meta.title
    }

    // 2. Check main blog page by slug
    if (to.name === 'BlogPage') {
      const blog = projects.find(p => p.slug === to.params.slug)
      if (blog) {
        pageTitle = `${blog.title} | cpp-playgrounds`
      } else {
        // 3. Check customReadMore entries inside each blog
        for (const project of projects) {
          const match = project.customReadMore?.find(item => item.slug === to.params.slug)
          if (match) {
            pageTitle = `${match.title} | cpp-playgrounds`
            break
          }
        }
      }
    }

    document.title = pageTitle

    // 4. Trigger GA
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: window.location.href,
        page_path: to.fullPath,
      })
    } else {
      console.warn('gtag not defined')
    }
  })
})






export default router

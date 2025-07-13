// import { createApp } from 'vue'
// import App from './App.vue'
// import { createRouter, createWebHistory } from 'vue-router'

// import BlogList from '@/views/BlogList.vue';
// import BlogDetail from '@/views/BlogDetail.vue';

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: '/', component: BlogList },
//     { path: '/blog/:slug', component: BlogDetail }
//   ]
// })

// const app = createApp(App)
// app.use(router)
// app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router'

AOS.init()
const app = createApp(App)
app.use(router)
app.mount('#app')

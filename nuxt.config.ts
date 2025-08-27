import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  components: true,
  pages: true,
  dir: {
    pages: 'src/pages', 
  },

  css: [
    '../assets/vendor/bootstrap/css/bootstrap.min.css',
    '../assets/vendor/bootstrap-icons/bootstrap-icons.css',
    '../assets/vendor/aos/aos.css',
    '../assets/vendor/glightbox/css/glightbox.min.css',
    '../assets/vendor/swiper/swiper-bundle.min.css',
    '../assets/css/main.css',
  ],

  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
      ],
      link: [
        { rel: 'icon', href: '/assets/img/favicon.png' },
        { rel: 'apple-touch-icon', href: '/assets/img/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        },
      ],
      script: [
        {src: '/js/vendor/bootstrap/js/bootstrap.bundle.min.js' },
        { src: '/js/vendor/glightbox/js/glightbox.min.js' },
        { src: '/js/vendor/isotope-layout/isotope.pkgd.min.js' },
        { src: '/js/vendor/swiper/swiper-bundle.min.js' },
        { src: '/js/vendor/purecounter/purecounter_vanilla.js' },
        { src: '/js/main.js' },
      ],
    }
  },

  modules: ['nuxt-aos', '@nuxtjs/axios'],
})
export default {
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa',
    'nuxt-compress',    
  ],   
  markdownit: {
    injected: true
  },   
  "nuxt-compress": {
    gzip: {
      cache: true
    },
    brotli: {
      threshold: 10240
    }
  },  

  
  //-----------------------------

  pwa: {
    manifest: {
      name: 'Nuxt Boilerplate',
      short_name: 'Nuxt Boilerplate',
      description: "A Nuxt Boilerplate.",
      lang: 'en',
      theme_color: "#fff",
      orientation: "portrait-primary",
      useWebmanifestExtension: false
    },    
    icon: {
      source: 'static/webmanifest/icon.png'
    }
  },  

  //-----------------------------

  head: {
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon/favicon.ico?v1',
      },      
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto+Slab&display=swap'
      }
    ]  
  },

  //-----------------------------

  css: [
    '@/assets/css/_reset.css',
    '@/assets/css/_skeleton.css',
    '@/assets/css/sass_mq.scss',
    '@/assets/css/global.scss',
    '@/assets/css/transitions.scss',
    '@/assets/css/blog.scss'
  ],

  //-----------------------------

  components: true
}
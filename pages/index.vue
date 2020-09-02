<template lang='pug'>
  div.use-transition
    .page-container
      Header
        h1 Home
      BodyContent(style='text-align: center')
        hr
        p Built with Nuxt/Vue
        img(src="~/assets/images/nuxt-icon-white.png" style='width: 100%; height: auto')    
    Footer
</template>

<script>
  export default {
    transition(to, from) {            
      return 'slide-left'
    },
  }
</script>

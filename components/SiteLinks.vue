<template lang='pug'>
  .sitelinks-container
    NuxtLink(v-for="(data, index) in jsonData.links" :key='index' :to='data.link' v-bind:class="[checkActive(data.link)]" ).link
      | {{data.name}}    
</template>

<script>
import jsonData from '../static/JSON/links.json'
export default {
  data(){
    return{
      jsonData
    }
  },
  methods:{
    checkActive(route){            
      return process.client ? route === location.pathname ? 'active' : 'inactive' : 'active'
    }
  },
  transition: 'slide-left'
}
</script>

<style lang='scss' scoped>
  .link{
    font-size: 16px;
    margin: 0 5px;
  }

  .active{
    color: red
  }
</style>

<template lang='pug'>   
  header.header
    slot
    SiteLinks
</template>

<style lang='scss'>
  @import '../assets/css/sass_mq.scss';

  .header{
    display: block;
    max-width: 600px;
    margin: auto;  
    padding-top: 50px;    
    text-align: center;     

    @include mq($from: tablet) {
      text-align: left;
    }     
  }
</style>
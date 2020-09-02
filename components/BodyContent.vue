<template lang='pug'>
  section.body-content-container
    slot
</template>

<style lang='scss' scoped>
  .body-content-container{
    font-size: 20px; 
    padding-bottom: 200px;
    max-width: 600px;
    min-height: 100vh;
    margin: auto;  
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }
</style>
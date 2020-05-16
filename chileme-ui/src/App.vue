<template lang='pug'>
  div#app
      router-view
</template>
<script>
export default {
  data(){
    return{
  
    }
  }
}
</script>
<style lang="scss">
@mixin init {
  width:100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
}
@mixin flx($dec:column){
  display: flex;
  flex-direction:$dec;
}
html,body{
  @include init;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @include init;
  background: slateblue;
}
</style>

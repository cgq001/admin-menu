<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  mounted(){
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
// 自定义进度条颜色
 #nprogress .bar {
      background: #F811B2 !important; //自定义颜色
  }
</style>

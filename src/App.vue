<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
    @import "./static/css/main.css";
    @import "./static/css/color-dark.css";     /*深色主题*/
    /*@import "../static/css/theme-green/color-green.css";   !*浅绿色主题*!*/
    html, body, #app, .wrapper{
    	overflow: inherit;
    }
</style>

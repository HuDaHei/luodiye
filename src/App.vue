<template>
  <div id="app">
    <router-view name="left"></router-view>
    <router-view></router-view>
    <router-view name="right"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  & > div {
    flex: 1;
  }
}
ul {
  list-style: none;
}
h1,h2{
  margin: 0;
  padding: 0;
}
* {
  margin: 0;
  padding: 0;
  font-size: 14px;
  box-sizing: border-box;
}
</style>

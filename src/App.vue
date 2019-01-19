<template>
  <div id="app">
    <router-link to='/Tables'>Tables</router-link>
    <router-link to='/Request'>Request</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #36502c;
  margin-top: 60px;
}
</style>

<!-- This is the main app component -->
<template>
  <div id="app">
    <!-- We can have static markup in here as well -->
    <MainHeader></MainHeader>
    <!-- This will render whatever route is matched in the url -->
    <router-view/>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';

export default {
  name: 'App',
  components: {
    MainHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  p {
    color: red;
  }
}
</style>

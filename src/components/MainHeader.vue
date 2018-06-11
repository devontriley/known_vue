<template>
  <div id="main-header">
    <ul v-if="navItems">
      <li v-for="item in navItems">
        <a :href="item.path">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'MainHeader',
    data () {
      return {
        navItems: [
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Contact', path: '/contact' }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#main-header {
}
</style>

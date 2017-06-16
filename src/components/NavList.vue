<template>
  <div class="nav-component">
    <nav>
      <router-link :to="{name: 'Index'}" >Home</router-link>
      <router-link :to="{name: 'Login'}" >Login</router-link>
      <router-link :to="{name: 'List'}" >List</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

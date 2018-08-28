<template>
  <div id="app">
    <section class="hero bg-img is-fullheight">
    <navigationbar></navigationbar>
    <router-view/>
    <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot content has-text-centered has-background-black">
    <p>
      <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</section>
  </div>
</template>

<script>
import navigationbar from '@/components/NavigationBar.vue'
import socialmedia from '@/components/SocialMedia.vue'
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
  color: #2c3e50;
}
</style>


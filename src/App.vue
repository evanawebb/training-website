<template>
  <div id="app">
    <section class="hero bg-img is-fullheight">
    <navigationbar></navigationbar>
    <router-view/>
    <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot content has-text-centered has-background-black">
    <p>
      <strong>Copyright AnKat Training {{date}}</strong>
    </p>
  </div>
</section>
  </div>
</template>

<script>
import navigationbar from '@/components/NavigationBar.vue'
import socialmedia from '@/components/SocialMedia.vue'
export default {
  name: 'App',
  computed: {
  date() {
     return (new Date()).getFullYear();
  }
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
}
</style>


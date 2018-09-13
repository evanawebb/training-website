<template>
<nav class="navbar has-background-black">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <img src="../assets/AnKatTrainingLogoWithOutCorners.jpg" alt="AnKat Training Logo" width="112" height="28">
    </a>
    <div class="navbar-burger burger" data-target="navBarBurgerTarget">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navBarBurgerTarget" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/">
        About Us
      </a>
      <a class="navbar-item" href="#/contact">
        Contact Us
      </a>
      <a class="navbar-item" href="#/training">
        Training
      </a>
      <a class="navbar-item" href="#/events">
        AnKat Events
      </a>
      <a class="navbar-item" href="#/horses">
        Available Horses
      </a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
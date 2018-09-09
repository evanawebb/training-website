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
        Aviable Horses
      </a>
      <!-- <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="/documentation/overview/start/">
          Docs
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="/documentation/overview/start/">
            Overview
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
            Modifiers
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
            Columns
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          </a>
          <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
        </div>
      </div> -->
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
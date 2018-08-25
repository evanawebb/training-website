<template>
<section class="hero bg-img is-fullheight">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">

  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
   <template>
        <body>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-black tile-element">
                        <p class="title">AnKat Training</p>
                        <p class="subtitle">About Us:</p>
                        <div class="content">
                            <p>AnKat Training offers training, full board and lessons year round specializing in breaking babies and a large variety of disciplines.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </article>
                </div>
        </body>
</template>

  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
</template>


<script>
export default {

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
/* formula used fix an image behind a scrolling website */
  /* background image */
/* .parallax {
  background-image: url("/assets/HorseFarm.jpg");
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
} */
.bg-img {
        background-image: url('../assets/HorseFarm.jpg') ;
        background-position: center center;
        background-repeat:  no-repeat;
        background-attachment: fixed;
        background-size:  cover;
        background-color: #999;
        min-height: 100%;
}
.page-containter {
    background-size:  cover;
    background-color: #999;
    width: 70%;
}
.tile-element {
    margin: 10%;
}
html, body {
    height: 100%;
    margin: 0;
}
</style>
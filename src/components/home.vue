<template>
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <div class="tile is-parent transBox">
      <article class="tile is-child notification is-white tile-element">
          <p class="title">AnKat Training</p>
          <p class="subtitle">About Us:</p>
          <div class="content">
              <p>AnKat Training offers training, full board and lessons year round specializing in breaking babies and a large variety of disciplines.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac habitasse platea. At in tellus integer feugiat scelerisque varius morbi enim nunc. Pretium nibh ipsum consequat nisl vel pretium lectus. Rhoncus mattis rhoncus urna neque viverra justo nec. Interdum velit laoreet id donec ultrices tincidunt arcu non. Nisi scelerisque eu ultrices vitae auctor eu. Scelerisque felis imperdiet proin fermentum leo vel orci. Scelerisque viverra mauris in aliquam sem fringilla ut. Ut pharetra sit amet aliquam id diam maecenas ultricies mi.</p>
          </div>
      </article>
    </div>
  </div>
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
  color: #ffffff;
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
        background-image: url('../assets/AnKatTraingingLogo.jpg') ;
        background-position: center center;
        background-repeat:  no-repeat;
        background-attachment: fixed;
        background-size:  cover;
        background-color: #999;
        min-height: 100%;
}

div.transBox {
    margin: 0%, 10%, 10%, 10%;
    background-color: #ffffff;
    border: 1px solid black;
    opacity: 0.8;
    filter: alpha(opacity=80); /* For IE8 and earlier */
}
</style>
<template>
  <!-- <div class="home"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- </div> -->
  <div class="container">
    <div id="home" class="flex-column flex-center">
      <h1>Are you Ready?</h1>
      <!-- <router-link to="/game" class="btn">Play</router-link> -->
      <router-link to="/highscores" class="btn correct">
        <i class="fab fa-spotify"></i> Login with Spotify
      </router-link>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Login',
    components: {},
  };
  // export default {
  //   name: 'Home',
  //   components: {
  //     HelloWorld
  //   }
  // }
</script>

<style>
  .correct {
    background: linear-gradient(
      32deg,
      rgba(11, 223, 36) 0%,
      rgb(41, 232, 111) 100%
    );
  }
</style>

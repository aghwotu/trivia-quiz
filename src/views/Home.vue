<template>
  <div class="container">
    <div id="home" class="flex-column flex-center">
      <h1>Are you Ready?</h1>
      <router-link to="/game" class="btn">Play</router-link>
      <router-link to="/highscores" id="highscore-btn" class="btn">High Scores<i class="fas fa-crown"></i></router-link>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {},
  };
</script>

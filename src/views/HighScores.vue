<template>
  <div class="container">
    <div id="highScores" class="flex-center flex-column">
      <h1 id="finalScore">Leaderboard</h1>
      <ul id="highScoresList"></ul>
      <router-link to="/" class="btn"
        >Go Home<i class="fas fa-home"></i
      ></router-link>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  @import '../assets/css/highscores.css';
</style>

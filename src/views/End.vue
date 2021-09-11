<template>
  <div class="container">
    <div id="end" class="flex-center flex-column">
      <h1 id="finalScore">0</h1>
      <form class="end-form-container">
        <h2 id="end-text">Enter your name below to save your score!</h2>
        <input
          type="text"
          name="name"
          id="username"
          placeholder="Enter your name"
        />
        <button
          class="btn"
          id="saveScoreBtn"
          type="submit"
          onclick="saveHighScore(event)"
          disabled
          >Save</button
        >
      </form>
      <router-link to="game" class="btn">Play Again</router-link>
      <router-link to="/" class="btn"
        >Go Home<i class="fas fa-home"></i
      ></router-link>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style></style>

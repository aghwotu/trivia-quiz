<template>
  <div class="container" v-if="questions && questions.length">
    <div id="game" class="justify-center flex-column">
      <div id="hud">
        <div class="hud-item">
          <p id="progressText" class="hud-prefix">
            Question {{ questionCounter + 1 }} of {{ numberOfQuestions }}
          </p>
          <div id="progressBar">
            <div
              id="progressBarFull"
              :style="{ width: progressBarWidth }"
            ></div>
          </div>
        </div>
        <div class="hud-item">
          <p class="hud-prefix">
            Score
          </p>
          <h1 class="hud-main-text" id="score">
            0
          </h1>
        </div>
      </div>
      <h1 id="question">{{ currentQuestion }}</h1>
      <div
        class="choice-container"
        v-for="(answer, index) in incorrectAnswers"
        :key="index"
        @click="getNextQuestion()"
      >
        <p class="choice-prefix">[{{ alphabets[index] }}]</p>
        <p class="choice-text" :data-number="index + 1">{{ answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { getCall } from '../services/api';
  import { BASE_URL } from '../config/endpoints';

  export default {
    data: () => {
      return {
        questions: [],
        numberOfQuestions: 0,
        incorrectAnswers: [],
        correctAnswer: '',
        alphabets: ['A', 'B', 'C', 'D'],
        // scoreText: '',
        currentQuestion: '',
        // acceptingAnswers: true,
        // score: 0,
        questionCounter: 0,
        progressBarWidth: '',
        correctAnswerIndex: 0,
        progressBarCounter: 1,
      };
    },
    methods: {
      getQuestions() {
        getCall(BASE_URL)
          .then((response) => {
            this.questions = response.data.results;
            this.currentQuestion = this.questions[
              this.questionCounter
            ].question;
            this.numberOfQuestions = this.questions.length;
            this.correctAnswer = this.questions[
              this.questionCounter
            ].correct_answer;
            this.incorrectAnswers = this.questions[
              this.questionCounter
            ].incorrect_answers;

            this.addCorrectAnswerToIncorrectAnswers();
            this.progressBarWidth = `${(this.progressBarCounter /
              this.numberOfQuestions) *
              100}%`;
          })
          .catch(() => {
            // console.log(error.message);
          })
          .finally(() => {});
      },
      startGame() {
        this.questionCounter = 0;
        this.score = 0;
        this.availableQuestions = [...this.questions];
      },
      getNextQuestion() {
        this.progressBarCounter++;
        this.questionCounter++;
        this.currentQuestion = this.questions[this.questionCounter].question;
        this.incorrectAnswers = this.questions[
          this.questionCounter
        ].incorrect_answers;
        this.addCorrectAnswerToIncorrectAnswers();
        this.progressBarWidth = `${(this.progressBarCounter /
          this.numberOfQuestions) *
          100}%`;
      },
      gradeAnswer() {},
      addCorrectAnswerToIncorrectAnswers() {
        let correctAnswerIndex = Math.floor(Math.random() * 4);
        this.incorrectAnswers.splice(
          correctAnswerIndex,
          0,
          this.questions[this.questionCounter].correct_answer
        );
      },
    },
    created() {
      this.getQuestions();
    },
  };
</script>

<style>
  @import '../assets/css/game.css';
</style>

<template>
  <div class="container" v-if="questions && questions.length">
    <div id="game" class="justify-center flex-column">
      <div id="hud">
        <div class="hud-item">
          <p id="progressText" class="hud-prefix"> Question {{ questionCounter + 1 }} of {{ numberOfQuestions }} </p>
          <div id="progressBar">
            <div id="progressBarFull" :style="{ width: progressBarWidth }"></div>
          </div>
        </div>
        <div class="hud-item">
          <p class="hud-prefix">
            Score
          </p>
          <h1 class="hud-main-text" id="score"> {{ score }}/1000 </h1>
        </div>
      </div>
      <h1 id="question">{{ decodeHtml(currentQuestion) }}</h1>
      <div
        class="choice-container"
        v-for="(answer, index) in incorrectAnswers"
        :key="index"
        @click="submitAnswer(answer, $event)"
      >
        <p class="choice-prefix">[{{ alphabets[index] }}]</p>
        <p class="choice-text" :data-number="index + 1">{{ answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { getCall } from '../services/http';
  import { API_GET_TRIVIA } from '../config/endpoints';
  import Categories from '../enums/categories';
  import he from 'he';

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
        score: 0,
        questionCounter: 0,
        progressBarWidth: '',
        correctAnswerIndex: 0,
        progressBarCounter: 1,
        classToApply: '',
      };
    },
    created() {
      this.getQuestions();
    },
    computed: {},
    methods: {
      getQuestions() {
        getCall(API_GET_TRIVIA.REQUEST(10, Categories.ENTERTAINMENT_BOOKS.value))
          .then((response) => {
            this.questions = response.data.results;
            this.currentQuestion = this.questions[this.questionCounter].question;
            this.numberOfQuestions = this.questions.length;
            this.correctAnswer = this.questions[this.questionCounter].correct_answer;
            this.incorrectAnswers = this.questions[this.questionCounter].incorrect_answers;

            this.addCorrectAnswerToIncorrectAnswers();
            this.progressBarWidth = `${(this.progressBarCounter / this.numberOfQuestions) * 100}%`;
          })
          .catch(() => {
            // console.log(error.message);
          })
          .finally(() => {});
      },
      submitAnswer(selectedAnswer, event) {
        this.score = selectedAnswer == this.correctAnswer ? this.score + 100 : this.score;
        let classToApply = selectedAnswer == this.correctAnswer ? 'correct' : 'incorrect';
        event.path[1].classList.add(classToApply);

        setTimeout(() => {
          this.progressBarCounter++;
          this.questionCounter++;

          this.currentQuestion = this.questions[this.questionCounter].question;
          this.correctAnswer = this.questions[this.questionCounter].correct_answer;
          this.incorrectAnswers = this.questions[this.questionCounter].incorrect_answers;
          this.progressBarWidth = `${(this.progressBarCounter / this.numberOfQuestions) * 100}%`;

          this.addCorrectAnswerToIncorrectAnswers();

          event.path[1].classList.remove(classToApply);
        }, 1000);
      },
      gradeAnswer() {},
      addCorrectAnswerToIncorrectAnswers() {
        let correctAnswerIndex = Math.floor(Math.random() * 4);
        this.incorrectAnswers.splice(correctAnswerIndex, 0, this.questions[this.questionCounter].correct_answer);
      },
      decodeHtml(stringWithHtml) {
        return he.decode(stringWithHtml);
      },
    },
  };
</script>

<style>
  @import '../assets/css/game.css';
</style>

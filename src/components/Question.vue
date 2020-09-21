<template>
  <div class="question-wrap">
    <div class="message is-expanded" style="width: 100%">
      <b-progress class="mb-0" :type="submitted ? '' : 'is-danger'" size="is-small" :value="timeRemaining"></b-progress>
      <div class="message-body">
        <p class="title" v-html="question.question"></p>
      </div>
      <b-field grouped group-multiline class="answers-wrap">

        <b-radio-button
            class="answer is-warning"
            :class="{'correct': submitted && answer === question.correct_answer}"
            :type="submitted && selectedAnswer === answer ? (answer === question.correct_answer ? 'is-success' : 'is-danger') : 'is-primary'"
            :disabled="submitted" expanded v-for="(answer, index) in answers"
            v-model="selectedAnswer"
            :native-value="answer"
            :key="answer">
          <b-icon type="is-primary" :icon="'numeric-' + (index + 1) +'-circle-outline'"></b-icon>
          <span v-html="answer"></span>
        </b-radio-button>

      </b-field>
    </div>

    <b-field>
      <b-button :disabled="submitted" type="is-primary is-medium" icon-left="check" @click="submitAnswer">Submit answer</b-button>
    </b-field>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    question: Object
  },

  data() {
    return {
      selectedAnswer: null,
      submitted: false,
      intervalObj: null,
      timeRemaining: 100.0
    }
  },

  computed: {
    answers(){
      const answers = this.question.incorrect_answers;
      answers.push(this.question.correct_answer);
      if(this.question.type === "boolean"){
        return answers
      }
      return shuffle(answers);
    }
  },

  methods: {
    submitAnswer(){
      if(this.selectedAnswer){
        this.submitted = true;
        clearInterval(this.intervalObj);  // stop the timer
        this.$emit("submit", {correct: this.selectedAnswer === this.question.correct_answer, remaining: this.timeRemaining});
      }
    }
  },

  created() {
    this.timeRemaining = 100;
    this.intervalObj = setInterval(() => {
      if(this.timeRemaining > 0){
        this.timeRemaining -= 0.10;
      } else{
        this.timeRemaining = 0;
        clearInterval(this.intervalObj);
      }
    }, 10)
  }
}

/**
 * Shuffles array in place. ES6 version
 * https://stackoverflow.com/a/6274381
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
</script>

<style>
  .question-wrap{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .answer > label{
    opacity: 1 !important;
  }
  .correct > label{
    background-color: #48c774 !important;
  }
</style>

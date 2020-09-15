<template>
  <div class="question-wrap">
    <p>{{ question.question }}</p>
    <b-field horizontal>
      <b-radio-button v-for="answer in answers" v-model="selectedAnswer" :native-value="answer" :key="answer">{{answer}}</b-radio-button>
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
  created() {
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

<style scoped>
  .question-wrap{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
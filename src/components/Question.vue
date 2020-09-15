<template>
  <div class="question-wrap">
    <div class="message">
      <div class="message-body">
        <p class="title">{{ decodeURIComponent(question.question) }}</p>
      </div>
      <b-field grouped class="answers-wrap">
        <b-radio-button expanded v-for="(answer, index) in answers" v-model="selectedAnswer" :native-value="answer" :key="answer">
          <b-icon type="is-primary" :icon="'numeric-' + (index + 1) +'-circle-outline'"></b-icon>
          <span>{{decodeURIComponent(answer)}}</span>
        </b-radio-button>
      </b-field>
    </div>

    <b-field>
      <b-button type="is-primary is-medium" icon-left="check">Submit answer</b-button>
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
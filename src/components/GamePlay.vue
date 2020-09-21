<template>
  <section>
    <b-tag type="is-dark is-medium" class="mb-4">Points: {{Math.floor(points)}} ({{numCorrectAnswers}}/{{activeStep+1}})</b-tag>
    <b-steps v-model="activeStep">
      <hr style="margin-top: 0;"/>
      <b-step-item :clickable="false" v-for="(question, index) in questions" :key="index" :step="index + 1">
        <!-- Use v-if on question to prevent all questions from being loaded into the dom at the same time -->
        <Question v-if="activeStep === index" :question="question" @submit="questionAnswered"></Question>
      </b-step-item>
      <template
          slot="navigation"
          slot-scope="{}">
        <b-button
            v-show="currentAnswered"
            outlined
            type="is-success"
            icon-pack="mdi"
            icon-right="forward"
            :disabled="!currentAnswered"
            @click.prevent="nextQuestion">
          Next
        </b-button>
      </template>
    </b-steps>
    <GameResults @restart="$emit('restart')" v-if="finished" :num-of-correct="numCorrectAnswers" :answer-times="answerTimes" :points="Math.floor(points)" ></GameResults>
  </section>
</template>

<script>
import Question from "@/components/Question";
import GameResults from "@/components/GameResults";
export default {
  name: "GamePlay",
  components: {GameResults, Question},
  props: {
    settings: Object
  },
  data() {
    return {
      questions: [],
      activeStep: 0,
      currentAnswered: false,
      points: 0,
      numCorrectAnswers: 0,
      answerTimes: [],  // holds time to answer for each question
      finished: false
    }
  },
  methods: {
    nextQuestion(){
      if(this.activeStep >= this.questions.length - 1){
        this.finished = true;
      }
      this.activeStep++;
      this.currentAnswered = false;
    },
    questionAnswered(result){
      if(result.correct){
        this.numCorrectAnswers++;
        this.points += 100 + result.remaining;
      }
      this.answerTimes.push(result.remaining);
      this.currentAnswered = true;
      console.log(result);
    }
  },
  created() {
    fetch(`https://opentdb.com/api.php?amount=10&category=${this.settings.selectedCategory}&difficulty=${this.settings.selectedDifficulty}`)
        .then(response => response.json())
        .then(data => {
          this.questions = data.results;
        });
  }
}
</script>

<style scoped>
</style>

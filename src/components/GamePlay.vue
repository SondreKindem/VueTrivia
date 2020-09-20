<template>
  <section>
    <b-steps v-model="activeStep">
      <hr style="margin-top: 0;"/>
      <b-step-item v-for="(question, index) in questions" :key="index" :step="index + 1">
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
  </section>
</template>

<script>
import Question from "@/components/Question";
export default {
  name: "GamePlay",
  components: {Question},
  props: {
    settings: Object
  },
  data() {
    return {
      questions: [],
      activeStep: 0,
      currentAnswered: false,
    }
  },
  methods: {
    nextQuestion(){
      this.activeStep++;
      this.currentAnswered = false;
    },
    questionAnswered(result){
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

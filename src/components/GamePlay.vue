<template>
  <section>
    <b-steps v-model="activeStep">
      <b-step-item v-for="(question, index) in questions" :key="index" :step="index + 1" :label="'question ' + (index+1)">
        <Question :question="question"></Question>
      </b-step-item>
      <template
          slot="navigation"
          slot-scope="{previous, next}">
        <b-button
            outlined
            type="is-danger"
            icon-pack="mdi"
            icon-left="backward"
            :disabled="previous.disabled"
            @click.prevent="previous.action">
          Previous
        </b-button>
        <b-button
            outlined
            type="is-success"
            icon-pack="mdi"
            icon-right="forward"
            :disabled="next.disabled"
            @click.prevent="next.action">
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
    }
  },
  mounted() {
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
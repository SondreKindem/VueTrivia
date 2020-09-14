<template>
  <section>
    <b-steps v-model="activeStep">
      <b-step-item v-for="(question, index) in questions" :key="index" :step="index + 1" :label="'question ' + (index+1)">{{question.question}}</b-step-item>
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
export default {
  name: "GamePlay",
  data() {
    return {
      questions: [],
      activeStep: 0,
    }
  },
  created() {
    fetch("https://opentdb.com/api.php?amount=10&category=20")
        .then(response => response.json())
        .then(data => this.questions = data.results);
  }
}
</script>

<style scoped>

</style>
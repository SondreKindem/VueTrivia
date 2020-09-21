<template>
  <section class="container">
    <h1 class="is-size-1">Results</h1>
    <p>Average answer bonus: {{averageTimeToAnswer}}</p>

    <b-button type="is-primary" class="my-5" @click="$emit('restart')">Play again?</b-button>

    <b-field label="Save result?" position="is-centered">
      <b-input v-model="name" placeholder="Your name" type="text"></b-input>
      <p class="control">
        <button class="button is-primary" @click="saveResult">Save</button>
      </p>
    </b-field>
    <div class="tile saves-table is-flex-tablet" >
      <b-table class="mx-6" style="text-align: left; min-width: 200px;" striped :data="leaderboard" :columns="columns"></b-table>
    </div>
  </section>
</template>

<script>
export default {
  name: "GameResults",

  props: {
    answerTimes: Array,
    points: Number,
    numOfCorrect: Number
  },

  data(){
    return {
      name: "",
      leaderboard: [
        {"name": "Sondre", "points": 500},
      ],
      columns: [
        {"field": "name", "label": "Name"},
        {"field": "points", "label": "Points"}
      ]
    }
  },

  computed: {
    averageTimeToAnswer(){
      return Math.floor(this.answerTimes.reduce((a, b) => a + b) / this.answerTimes.length);
    }
  },

  methods: {
    saveResult(){
      if(this.name && this.name.trim()){
        this.leaderboard.push({"name": this.name, "points": this.points});
        localStorage.setItem("leaderboard", JSON.stringify(this.leaderboard));
      }
    }
  },

  mounted() {
    this.leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    if(!this.leaderboard){
      this.leaderboard = [];
    }
  }
}
</script>

<style scoped>
  .saves-table {
    justify-content: center;
  }
</style>

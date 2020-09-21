<template>
  <div>
    <h1 class="is-size-1">Leaderboard</h1>
    <div class="tile leaderboard is-flex-tablet" >
      <b-table class="mx-6" style="text-align: left; min-width: 200px;" striped :data="leaderboard" :columns="columns"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Leaderboard",

  data(){
    return {
      name: "",
      leaderboard: [],
      columns: [
        {"field": "name", "label": "Name"},
        {"field": "points", "label": "Points"}
      ]
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
  .leaderboard {
    justify-content: center;
  }
</style>

<template>
  <div id="play" class="play container mt-6">
    <GameMenu v-if="!gameStarted" :categories="categories" v-on:play="startGame"></GameMenu>
    <GamePlay v-if="gameStarted"></GamePlay>
  </div>
</template>

<script>
import GameMenu from "@/components/GameMenu";
import GamePlay from "@/components/GamePlay";

export default {
  name: "Play",
  components: {GameMenu, GamePlay},
  data(){
    return{
      gameStarted: false,
      settings: null,
      categories: []
    }
  },
  methods: {
    startGame(settings){
      this.settings = settings;
      console.log(settings);
      this.gameStarted = true;
    }
  },
  created() {
    fetch("https://opentdb.com/api_category.php")
        .then(response => response.json())
        .then(data => this.categories = data.trivia_categories);
  }
}
</script>

<style scoped>
#play {
}
</style>

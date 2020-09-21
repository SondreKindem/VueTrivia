<template>
  <div id="play" class="play container mt-6">
    <GamePlay @restart="restart" v-if="gameStarted" :settings="settings"></GamePlay>
    <GameMenu v-else :categories="categories" @play="startGame"></GameMenu>
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
      settings: {
        selectedCategory: 0,
        selectedDifficulty: 0,
      },
      categories: []
    }
  },
  methods: {
    startGame(settings){
      this.settings = settings;
      console.log(settings);
      this.gameStarted = true;
    },
    restart(){
      this.gameStarted = false;
    }
  },
  mounted() {
    if(this.$apiResources.categories){
      this.categories = this.$apiResources.categories
    } else{
      fetch("https://opentdb.com/api_category.php")
          .then(response => response.json())
          .then(data => {
            this.categories = data.trivia_categories;
            this.$apiResources.categories = data.trivia_categories
          });
    }

  }
}
</script>

<style scoped>
#play {
}
</style>

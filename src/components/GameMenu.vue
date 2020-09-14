<template>
  <div class="container">
    <section>
      <b-field label="Category">
        <b-select v-model="selectedCategory" placeholder="Any category">
          <option :value="null">Any category</option>
          <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
        </b-select>
      </b-field>
      <b-field label="Difficulty">
        <b-select v-model="selectedDifficulty" placeholder="Any difficulty">
          <option :value="null">Any difficulty</option>
          <option v-for="difficulty in ['easy', 'medium', 'hard']" :value="difficulty" :key="difficulty">
            {{ difficulty }}
          </option>
        </b-select>
      </b-field>
      <b-button type="is-primary is-fullwidth">Play!</b-button>
    </section>
  </div>
</template>

<script>
export default {
  name: "GameMenu",
  data() {
    return {
      selectedCategory: null,
      selectedDifficulty: null,
      categories: [],
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

</style>

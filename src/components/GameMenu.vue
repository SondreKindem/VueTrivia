<template>
  <div class="container is-vcentered">
    <section>
      <b-field label="Category">
        <b-select v-model="settings.selectedCategory" placeholder="Any category">
          <option :value="null">Any category</option>
          <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
        </b-select>
      </b-field>
      <b-field label="Difficulty">
        <b-select v-model="settings.selectedDifficulty" placeholder="Any difficulty">
          <option :value="null">Any difficulty</option>
          <option v-for="difficulty in ['easy', 'medium', 'hard']" :value="difficulty" :key="difficulty">
            {{ difficulty }}
          </option>
        </b-select>
      </b-field>
      <b-button type="is-primary" @click="$emit('play', settings)">Play!</b-button>
    </section>
  </div>
</template>

<script>

export default {
  name: "GameMenu",
  props: {
    categories: Array,
  },
  data() {
    return {
      settings: {
        selectedCategory: null,
        selectedDifficulty: null,
      },
      gameStarted: false,
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="container is-vcentered">
    <section>
      <b-field label="Category">
        <b-select v-model="settings.selectedCategory" placeholder="Any category">
          <option :value="0">Any category</option>
          <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
        </b-select>
      </b-field>
      <b-field label="Difficulty">
        <b-select v-model="settings.selectedDifficulty" placeholder="Any difficulty">
          <option :value="0">Any difficulty</option>
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
        selectedCategory: 0,
        selectedDifficulty: "0",
      },
      gameStarted: false,
    }
  },
}
</script>

<style scoped>

</style>

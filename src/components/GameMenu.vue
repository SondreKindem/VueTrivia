<template>
  <div class="container">
    <section>
      <b-field label="Category">
        <b-select placeholder="Choose category">
          <option>Any category</option>
          <option v-for="category in categories" :value="category.id" :key="category.id">{{category.name}}</option>
        </b-select>
      </b-field>
    </section>
  </div>
</template>

<script>
export default {
  name: "GameMenu",
  data: function () {
    return {
      selectedCategory: null,
      categories: [],
    }
  },

  created: function () {
    fetch("https://opentdb.com/api_category.php")
      .then(response => response.json())
      .then(data => this.categories = data.trivia_categories);
  }
}
</script>

<style scoped>

</style>

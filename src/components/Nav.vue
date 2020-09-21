<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h3 class="is-size-5 has-text-primary is-family-monospace">Triv·i·a</h3>
      </b-navbar-item>
    </template>
    <template slot="start">
      <router-link class="navbar-item is-tab" :to="{ name: 'Play' }">
        Play
      </router-link>
      <router-link class="navbar-item is-tab" :to="{ name: 'Leaderboard' }">
        Leaderboard
      </router-link>
      <router-link class="navbar-item is-tab" :to="{ name: 'About' }">
        About
      </router-link>
    </template>
  </b-navbar>
</template>

<script>
export default {
name: "Nav"
}
</script>

<style scoped>

</style>

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

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
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

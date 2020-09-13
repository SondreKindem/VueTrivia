<template>
  <div class="home">
    <front-page></front-page>
  </div>
</template>

<script>
// @ is an alias to /src
import FrontPage from "@/components/FrontPage";

export default {
  name: 'Home',
  components: {
    FrontPage
  }
}
</script>

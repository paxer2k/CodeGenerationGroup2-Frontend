<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Welcome to the homepage</h2>
      <h3 class="mt-lg-2" v-if="this.$store.getters.isAuthenticated">You are authenticated</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",

  methods: {

  },
};
</script>

<style>
</style>
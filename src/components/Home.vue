<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Welcome to the homepage</h2>
      <h3 class="mt-lg-2" v-if='isLoggedIn()'>You are authenticated</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",

  methods: {
    isLoggedIn() {
      return this.$store.state.JWTtoken;
    },
    getRole() {
      return;
    },
  },
};
</script>

<style>
</style>
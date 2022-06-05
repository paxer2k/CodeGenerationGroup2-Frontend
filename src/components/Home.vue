<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Welcome to the homepage</h2>
      <h3 class="mt-lg-2" v-if="isLoggedIn()">You are authenticated</h3>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",

  methods: {
    isLoggedIn() {
      return this.$store.state.JWTtoken;
    },
    getUsername() {
      return;
    },
    getUser() {
      axios
        .get("/users/" + localStorage.getItem("id"))
        .then((result) => {
          this.users = result.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>
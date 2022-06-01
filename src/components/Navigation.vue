<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/users" class="nav-link" active-class="active"
            >Users</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/accounts" class="nav-link" active-class="active"
            >Accounts</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/transactions"
            class="nav-link"
            id="signup-link"
            active-class="active"
            >Transactions</router-link
          >
        </li>

        <li class="nav-item">
          <router-link
            to="/signup"
            class="nav-link"
            id="signup-link"
            active-class="active"
            >Signup</router-link
          >
        </li>

        <li class="nav-item">
          <a v-if="isLoggedIn()" class="nav-link" @click="this.logout()"
            >Logout</a
          >
          <router-link v-else to="/login" class="nav-link">Login</router-link>
          <!-- <router-link v-else to="/login" class="nav-link">login</router-link> -->
        </li>
      </ul>
    </div>
  </nav>
  <!-- display contents of view -->
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
    },
    isLoggedIn() {
      return this.$store.state.token;
    },
  },
};
</script>

<style>
.nav-link {
  padding: 10px;
  margin: 10px;
}
</style>
<template>
  <nav class="navbar navbar-dark bg-dark py-2 navbar-expand-md">
    <div class="container">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active"
            >Home</router-link
          >
        </li>

        <li class="nav-item" v-if="this.$store.getters.isAuthenticated">
          <router-link to="/profile" class="nav-link" active-class="active"
            >Profile</router-link
          >
        </li>

        <li class="nav-item" v-if="this.$store.getters.isAuthenticated && this.$store.getters.isEmployee">
          <router-link to="/users" class="nav-link" active-class="active"
            >Users</router-link
          >
        </li>

        <li class="nav-item" v-if="this.$store.getters.isAuthenticated">
          <router-link to="/accounts" class="nav-link" active-class="active"
            >Accounts</router-link
          >
        </li>
        <li class="nav-item" v-if="this.$store.getters.isAuthenticated">
          <router-link
            to="/transactions"
            class="nav-link"
            id="signup-link"
            active-class="active"
            >Transactions</router-link
          >
        </li>

        <li class="nav-item" v-if="this.$store.getters.isAuthenticated && this.$store.getters.isEmployee">
          <router-link
            to="/createuser"
            class="nav-link"
            id="signup-link"
            active-class="active"
            >Create User</router-link
          >
        </li>

        <li class="nav-item" v-if="this.$store.getters.isAuthenticated && this.$store.getters.isEmployee">
          <router-link
            to="/createaccount"
            class="nav-link"
            id="signup-link"
            active-class="active"
            >Create account</router-link
          >
        </li>
        </ul>

        <ul class="navbar-nav">
        <li class="nav-item">
          <a v-if="this.$store.getters.isAuthenticated"
            class="nav-link"
            @click="this.logout()"
            >Logout</a
          >
          <router-link
            v-else
            to="/login"
            class="nav-link"
            >Login</router-link
          >
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
          this.$router.push("/login");
        })
        .catch((error) => console.log(error));
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
<template>
  <section class="container mt-5 p-5 col-10 col-md-6 col-lg-4 col-xl-3">
    <div class="container">
          <div v-if="errorMessage" class="alert alert-danger" role="alert">
            {{ errorMessage }}
          </div>
          <form>
            <h1 class="h3 mb-3 font-weight-normal"> Please sign in</h1>
            <div class="mt-3">
              <label for="inputUsername" class="sr-only">Username</label>
              <input
                id="inputUsername"
                type="text"
                class="form-control"
                v-model="username"
                placeholder="Enter your username..."
              />
            </div>
            <div class="mt-3">
              <label for="inputPassword" class="sr-only ">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                v-model="password"
                placeholder="Enter your password..."
              />
            </div>
            <button type="button" @click="login()" class="btn btn-primary mt-3">
              Sign in
            </button>
          </form>
    </div>
  </section>
</template>
 
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: null,
    };
  },
  methods: {
    // this is part is synchrone, which means it will be executed later than any other code outside the store
    login() {
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.replace("/");
        })
        .catch((error) => {
          this.errorMessage = error;
          console.log(error);
        });
    },
  },
};
</script>
 
<style>
</style>
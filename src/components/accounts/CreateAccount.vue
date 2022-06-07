<template>
  <div class="container mt-3">
    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>
    <form>
      <h1 class="h3 mb-3 fw-normal">Create a account</h1>

      <div class="input-group mb-3">
          <span class="input-group-text">Account type</span>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            v-model="account.accountType"
          >
            <option selected value="current">current</option>
            <option value="savings">savings</option>
          </select>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text">User ID</span>
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          v-model="this.account.userID"
          placeholder="Phone"
          disabled
        />
      </div>

      <button
        class="w-100 btn btn-lg btn-success"
        type="button"
        @click="this.createAccount()"
      >
        Create account
      </button>
    </form>
  </div>
</template>

<script>
import axios from "../../axios-auth";

export default {
  name: "CreateAccount",
  props: {
    userID: String,
  },
  data() {
    return {
      account: {
        accountType: "",
        userID: this.userID,
      },
      errorMessage: "",
    };
  },
  methods: {
    createAccount() {
      axios
        .post("/accounts", this.account)
        .then((result) => {
          console.log(result);
          alert(
            "Account of type " + "(" + this.account.accountType + ")" + " for " +
              this.account.userID +
              " " +
              " has been created!"
          );
          this.$router.push("/accounts");
        })
        .catch((error) => {
          this.errorMessage = error.response.data.message;
          console.log(error);
        });
    },
  },
};
</script>


<style scoped>

</style>
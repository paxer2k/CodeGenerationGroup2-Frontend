<template>
  <div class="container mt-3">
    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>
    <form>
      <h1 class="h3 mb-3 fw-normal">Withdraw</h1>

      <div class="input-group mb-3">
        <span class="input-group-text">Amount</span>
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          v-model="this.withdraw.amount"
          placeholder="Amount"
        />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">Pincode</span>
        <input
          type="password"
          class="form-control"
          id="floatingInput"
          v-model="this.withdraw.pincode"
          placeholder="Pincode"
        />
      </div>

      <button
        class="w-100 btn btn-lg btn-success"
        type="button"
        @click="this.withdrawMoney()"
      >
        Confirm withdrawal
      </button>
    </form>
  </div>
</template>

<script>
import axios from "../../axios-auth";

export default {
  name: "Withdraw",
  props: {
    iban: String,
  },
  data() {
    return {
      withdraw: {
        amount: 0,
        pincode: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    withdrawMoney() {
      axios
        .post("/accounts/" + this.iban + "/withdraw", this.withdraw)
        .then((result) => {
          console.log(result);
          alert(
            "Amount of " +
              "(" +
              this.withdraw.amount +
              ")" +
              " for " +
              this.iban +
              " " +
              " has been withdrawn!"
          );
          this.$router.push("/profile");
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
<template>
  <div class="container mt-3">
    <div v-if="this.errorMessage" class="alert alert-danger" role="alert">
      {{ this.errorMessage }}
    </div>
    <form>
      <h1 class="h3 mb-3 fw-normal">Despoit</h1>

      <div class="input-group mb-3">
        <span class="input-group-text">Amount</span>
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          v-model="this.deposit.amount"
          placeholder="Amount"
        />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">Pincode</span>
        <input
          type="password"
          class="form-control"
          id="floatingInput"
          v-model="this.deposit.pincode"
          placeholder="Pincode"
        />
      </div>

      <button
        class="w-100 btn btn-lg btn-success"
        type="button"
        @click="this.depositMoney()"
      >
        Confirm deposit
      </button>
    </form>
  </div>
</template>

<script>
import axios from "../../axios-auth";

export default {
  name: "Deposit",
  props: {
    iban: String,
  },
  data() {
    return {
      deposit: {
        amount: 0,
        pincode: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    depositMoney() {
      axios
        .post("/accounts/" + this.iban + "/deposit", this.deposit)
        .then((result) => {
          console.log(result);
          alert(
            "Amount of " +
              "(" +
              this.deposit.amount +
              ")" +
              " for " +
              this.iban +
              " " +
              " has been added!"
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
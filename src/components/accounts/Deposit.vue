<template>
  <div class="container mt-3">
    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
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
.body-login {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #05050894;
}

.form-login {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

#login-logo {
  width: 60%;
  height: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.form-login .checkbox {
  font-weight: 400;
}

.form-login .form-floating:focus-within {
  z-index: 2;
}

.form-login input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-login input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

#copyright-login {
  font-size: 0.8rem;
}

.form-floating {
  padding-bottom: 5px;
}
</style>
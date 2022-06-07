<template>
  <div class="container mt-3">
    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>
    <form>
      <h1 class="h3 mb-3 fw-normal">Create a transaction</h1>

      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          pattern="[a-zA-Z][a-zA-Z0-9\s]*"
          title="Fill in a correct firstname"
          v-model="transaction.fromIBAN"
          disabled
          placeholder="From IBAN"
          required
        />
        <label for="floatingInput">IBAN From</label>
      </div>

      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          pattern="[a-zA-Z][a-zA-Z0-9\s]*"
          title="Fill in a correct lastname"
          v-model="transaction.toIBAN"
          placeholder="Last name"
          required
        />
        <label for="floatingInput">IBAN To</label>
      </div>

      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          v-model="transaction.amount"
          placeholder="name@example.com"
          required
        />
        <label for="floatingInput">Amount</label>
      </div>

      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingPassword"
          v-model="transaction.userID"
          disabled
          placeholder="Password"
          required
        />
        <label for="floatingPassword">userID</label>
      </div>

      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingInput"
          title="Fill a pincode"
          v-model="transaction.pincode"
          placeholder="Address"
          required
        />
        <label for="floatingInput">Pincode</label>
      </div>

      <button
        class="w-100 btn btn-lg btn-success"
        type="button"
        @click="this.createTransaction()"
      >
        Confirm transaction
      </button>
    </form>
  </div>
</template>

<script>
import axios from "../../axios-auth";

export default {
  name: "CreateTransaction",
  props: {
      iban: String,
  },
  data() {
    return {
      transaction: {
          fromIBAN: this.iban,
          toIBAN: "",
          amount: 0,
          userID: localStorage.getItem("userID"),
          pincode: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    createTransaction() {
      axios
        .post("/transactions", this.transaction)
        .then((result) => {
          console.log(result.headers);
          alert(
            "Amount of " +
              this.transaction.amount +
              " has been transferred from " +
              this.transaction.fromIBAN +
              " to " + this.transaction.toIBAN 
          );
            this.$router.push("/transactions/" + this.iban);
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
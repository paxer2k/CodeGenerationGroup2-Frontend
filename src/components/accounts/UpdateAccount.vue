<template>
  <section>
    <div class="container col-lg-5">
      <form ref="form">
        <h2 class="mt-3 mt-lg-5" style="text-align: center">Edit account</h2>
        <h5 class="mb-4"></h5>

        
        <div class="input-group mb-3">
          <span class="input-group-text">Account type</span>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            v-model="account.accountType"
          >
            <option value="current">current</option>
            <option value="savings">savings</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Account status</span>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            v-model="account.accountStatus"
          >
            <option selected="active">active</option>
            <option value="inactive">inactive</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Absolute limit</span>
          <input
            type="text"
            class="form-control"
            v-model="account.absoluteLimit"
          />
        </div>

        <div class="input-group mt-4">
          <button
            type="button"
            class="btn btn-primary col-6"
            @click="this.updateAccount()"
          >
            Update
          </button>
          <button
            style="text-align: center"
            type="button"
            class="btn btn-danger col-6"
            @click="this.$router.push('/accounts')"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "../../axios-auth";
export default {
  name: "UpdateAccount",
  props: {
    iban: String,
  },
  data() {
    return {
      account: {
        accountType: "",
        accountStatus: "",
        absoluteLimit: 0,
      },
    };
  },
  mounted() {
    axios
      .get("/accounts/" + this.iban)
      .then((result) => {
        this.account = result.data;
      })
      .catch((error) => console.log(error));
  },

  methods: {
    updateAccount() {
      axios
        .put("/accounts/" + this.iban, this.account)
        .then((result) => {
          console.log(result);
          alert("Account " + this.account.iban + " " + " has been updated!");
          this.$router.push("/accounts");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>
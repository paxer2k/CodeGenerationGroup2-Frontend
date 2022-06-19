<template>
  <div class="container">
    <div class="container-fluid mt-3">
      <label>Query by IBAN:</label>
      <input type="text" placeholder="Enter a name" style="margin-left: 30px;" v-model="iban" />
    </div>
    <div class="container-fluid mt-3">
      <label>Query by pagination:</label>
      <input type="number" placeholder="Enter an offset" style="margin-left: 30px;" v-model="skip" />
      <input type="number" placeholder="Enter an limit" style="margin-left: 30px;" v-model="limit" />
    </div>
    <button class="btn btn-success" style="margin-top: 10px;" @click="getAccountsByPagination()">
      Search
    </button>
    <h1 class="text-center" style="margin-top: 10px;">Account List</h1>
    <table class="table table-stripped">
      <thead>
        <th>Account IBAN</th>
        <th>Account Type</th>
        <th>Account Status</th>
        <th>Account Balance</th>
        <th>Account Absolute Limit</th>
      </thead>
      <tbody>
        <account-list-item
          v-for="account in accounts"
          :key="account.iban"
          :account="account"
          @update="getAccounts"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "../../axios-auth";
import AccountListItem from "./AccountListItem.vue";
export default {
  name: "AccountList",
  components: {
    AccountListItem,
  },
  data() {
    return {
      accounts: [],
      skip: null,
      limit: null,
      iban: "",
    };
  },
  mounted() {
    this.getAccounts();
  },
  methods: {
    getAccountsByPagination() {
      axios
        .get(
          "/accounts?skip=" +
            this.skip +
            "&limit=" +
            this.limit +
            "&name=" +
            this.iban
        )
        .then((result) => {
          this.accounts = result.data;
        })
        .catch((error) => console.log(error));
    },
    getAccounts() {
      axios
        .get("/accounts")
        .then((result) => {
          this.accounts = result.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>
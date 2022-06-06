<template>
  <div class="container">
    <h1 class="text-center"> Account List </h1>
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
          @update="getAccountsByIBAN"
        />
      </tbody>
    </table>
    </div>
</template>

<script>
import axios from "../../axios-auth";
import AccountListItem from './AccountListItem.vue'
export default {
  name: "AccountList",
  components: {
    AccountListItem,
  },
  data() {
    return {
      accounts: [],
    };
  },
  mounted() {
    this.getAccounts();
  },
  methods: {
    getAccounts() {
      axios
      .get("/accounts/")
      .then((result) => {
        this.accounts = result.data;
      }).catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>
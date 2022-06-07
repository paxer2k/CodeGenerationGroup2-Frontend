<template>
  <tr>
    <td>{{ account.iban }}</td>
    <td>{{ account.accountType }}</td>
    <td>{{ account.accountStatus }}</td>
    <td>{{ account.balance }}</td>
    <td>{{ account.absoluteLimit }}</td>
    <td><button type="button" class="btn btn-warning" @click="updateAccount(account.iban)">Edit</button></td>
    <td><button type="button" class="btn btn-danger" @click="deleteAccount(account.iban)">Delete</button></td>
    <td><button type="button" class="btn btn-success" @click="createTransaction(account.iban)">Create transaction</button></td>
  </tr>
</template>

<script>
import axios from './../../axios-auth'
export default {
    name: "AccountListItem",
    props: {
        account: Object,
    },
  methods: {
    deleteAccount(iban) {
      axios
      .delete("/accounts/" + iban)
      .then((result) => {
        console.log(result);
        this.$emit("update");
      })
      .catch((error) => console.log(error));
    },
    updateAccount(iban) {
      this.$router.push("/updateaccount/" + iban)
    },
    createTransaction(iban) {
      this.$router.push("/createtransaction/" + iban)
    }
  }
};
</script>

<style>
</style>
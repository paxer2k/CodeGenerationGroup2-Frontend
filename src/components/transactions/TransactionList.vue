<template>
  <div class="container">
    <div class="container-fluid mt-3">
      <label>Query by username:</label>
      <input type="text" placeholder="Enter a name" v-model="name" />
    </div>
    <div class="container-fluid mt-3">
      <label>Query by pagination:</label>
      <input
        type="number"
        min="0"
        placeholder="Enter an offset"
        v-model="skip"
      />
      <input
        type="number"
        min="0"
        placeholder="Enter an limit"
        v-model="limit"
      />
    </div>
    <div class="container-fluid mt-3">
      <label>Query by account size:</label>
      <input
        type="number"
        min="0"
        placeholder="Enter an offset"
        v-model="accountSize"
      />
    </div>
    <button class="btn btn-success" @click="getUsersByPagination()">
      Search
    </button>
    <h1 class="text-center">User List</h1>
    <table class="table table-stripped">
      <thead>
        <th>From IBAN</th>
        <th>To IBAN</th>
        <th>Amount</th>
        <th>Date</th>
        <th>userID</th>
      </thead>
      <tbody>
        <transaction-list-item
          v-for="transaction in transactions"
          :key="transaction.fromIBAN"
          :transaction="transaction"
          @update="getTransactionsByIBAN"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "../../axios-auth";
import TransactionListItem from "./TransactionListItem.vue";
export default {
  name: "TransactionList",
  components: {
    TransactionListItem,
  },
  props: {
      iban: String
  },
  data() {
    return {
      transactions: [],
    };
  },
  mounted() {
    this.getTransactionsByIBAN();
  },
  methods: {
    getTransactionsByIBAN() {
      axios
        .get("/trasactions/" + this.iban)
        .then((result) => {
          this.transactions = result.data;
        })
        .catch((error) => console.log(error));
    },
    getUsers() {
      axios
        .get("/users")
        .then((result) => {
          this.users = result.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>
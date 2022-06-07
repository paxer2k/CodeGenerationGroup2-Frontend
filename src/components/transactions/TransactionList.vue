<template>
  <div class="container">
    <div class="container-fluid mt-3">
      <label>Query by start and end date:</label>
      <input type="text" placeholder="Enter an start date" v-model="startDate" />
      <input type="text" placeholder="Enter an end date" v-model="endDate" />
    </div>
    <button class="btn btn-success" @click="getTransactionsByIBANFilter()">
      Search
    </button>
    <h1 class="text-center">Transaction list</h1>
    <table class="table table-stripped">
      <thead>
        <th>From IBAN</th>
        <th>To IBAN</th>
        <th>Amount</th>
        <th>Date</th>
        <th>User ID</th>
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
    iban: String,
  },
  data() {
    return {
      transactions: [],
      startDate: "",
      endDate: "",
    };
  },
  mounted() {
    this.getTransactionsByIBAN();
  },
  methods: {
    getTransactionsByIBANFilter() {
      axios
        .get(
          "/transactions/" +
            this.iban +
            "?startDate=" +
            this.startDate +
            "&endDate=" +
            this.endDate
        )
        .then((result) => {
          this.transactions = result.data;
        })
        .catch((error) => console.log(error));
    },
    getTransactionsByIBAN() {
      axios
        .get(
          "/transactions/" + this.iban)
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
<template>
  <div class="container">
    <div class="container-fluid mt-3">
      <label>Query by start and end date:</label>
      <input
        style="margin-left: 30px"
        type="date"
        placeholder="Enter an start date"
        v-model="startDate"
      />
      <input
        type="date"
        placeholder="Enter an end date"
        style="margin-left: 30px"
        v-model="endDate"
      />
    </div>

    <div class="container-fluid mt-3">
      <label>Query by FROM/TO IBAN</label>

      <input
        style="margin-left: 30px"
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
        value="FROM"
        v-model="picked"
      />
      <label
        class="form-check-label"
        for="flexRadioDefault1"
        style="margin-left: 5px"
      >
        FROM
      </label>

      <input
        style="margin-left: 30px"
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault2"
        value="TO"
        v-model="picked"
      />
      <label
        class="form-check-label"
        for="flexRadioDefault2"
        style="margin-left: 5px"
      >
        TO
      </label>

      <input
        style="margin-left: 30px"
        type="text"
        placeholder="Enter IBAN"
        v-model="filteredIBAN"
      />
    </div>

    <div class="container-fluid mt-3">
      <label>Query by exact amount</label>

      <input
        style="margin-left: 30px"
        type="number"
        placeholder="Enter an amount"
        v-model="equalBalance"
      />
    </div>

    <div class="container-fluid mt-3">
      <label>Query by amount range</label>

      <input
        style="margin-left: 30px"
        type="number"
        placeholder="More than"
        v-model="moreBalance"
      />

      <input
        style="margin-left: 30px"
        type="number"
        placeholder="Less than"
        v-model="lessBalance"
      />
    </div>

    <div class="container-fluid mt-3">
    <button class="btn btn-success" @click="getTransactionsByIBANFilter()">
      Search
    </button>
    <button class="btn btn-danger" style="margin-left: 30px;" @click="resetButton()">
      Reset
    </button>
    </div>
    
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
      startDate: null,
      endDate: null,
      lessBalance: null,
      moreBalance: null,
      equalBalance: null,
      filteredIBAN: null,
      picked: null,
    };
  },
  mounted() {
    this.getTransactionsByIBAN();
  },
  methods: {
    getTransactionsByIBANFilter() {
      axios
        .get("/transactions/" + this.iban, {
          params: this.axiosParams,
        })
        .then((result) => {
          this.transactions = result.data;
        })
        .catch((error) => console.log(error));
    },
    getTransactionsByIBAN() {
      axios
        .get("/transactions/" + this.iban)
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
    resetButton() {
      this.startDate = null;
      this.endDate = null;
      this.lessBalance = null;
      this.moreBalance = null;
      this.equalBalance = null;
      this.filteredIBAN = null;
      this.picked = null;
      this.getTransactionsByIBAN();
    },
  },
  computed: {
    axiosParams() {
      const params = new URLSearchParams();

      if (this.startDate != null) {
        params.append("startDate", this.startDate);
      }

      if (this.endDate != null) {
        params.append("endDate", this.endDate);
      }

      if (this.picked == "FROM" && this.filteredIBAN != null) {
        params.append("fromIBAN", this.filteredIBAN);
      }

      if (this.picked == "TO" && this.filteredIBAN != null) {
        params.append("toIBAN", this.filteredIBAN);
      }

      if (this.equalBalance != null) {
        params.append("equalBalance", this.equalBalance);
      }

      if (this.moreBalance != null && this.lessBalance != null) {
        params.append("moreBalance", this.moreBalance);
        params.append("lessBalance", this.lessBalance);
      }

      return params;
    },
  },
};
</script>

<style>
</style>
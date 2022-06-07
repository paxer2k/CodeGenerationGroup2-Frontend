<template>
  <tr>
    <td>{{ transaction.fromIBAN }}</td>
    <td>{{ transaction.toIBAN }}</td>
    <td>€{{ transaction.amount }}</td>
    <td>{{ transaction.date }}</td>
    <td>{{ transaction.userID }}</td>
  </tr>
</template>

<script>
import axios from "./../../axios-auth";
export default {
  name: "TransactionListItem",
  props: {
    transaction: Object,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
     this.getUsersByID();
  },
  methods: { // f a i l u r e
    getUsersByID() {
      axios
        .get("/users/" + this.transaction.userID)
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
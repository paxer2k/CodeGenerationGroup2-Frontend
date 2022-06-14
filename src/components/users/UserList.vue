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
      <label>Query by number of accounts:</label>
      <input
        type="number"
        min="0"
        placeholder="Enter an account size"
        v-model="accountSize"
      />
    </div>
    <button class="btn btn-success" @click="getUsersByPagination()">
      Search
    </button>
    <h1 class="text-center">User List</h1>
    <table class="table table-stripped">
      <thead>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>TransactionLimit</th>
        <th>DayLimit</th>
        <th>Accounts</th>
      </thead>
      <tbody>
        <user-list-item
          v-for="user in users"
          :key="user.userID"
          :user="user"
          @update="getUsers"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "../../axios-auth";
import UserListItem from "./UserListItem.vue";
export default {
  name: "UserList",
  components: {
    UserListItem,
  },
  data() {
    return {
      users: [],
      skip: null,
      limit: null,
      name: "",
      accountSize: null,
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsersByPagination() {
      axios
        .get(
          "/users?skip=" +
            this.skip +
            "&limit=" +
            this.limit +
            "&name=" +
            this.name +
            "&accounts=" +
            this.accountSize
        )
        .then((result) => {
          this.users = result.data;
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
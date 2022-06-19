<template>
  <div class="container">
    <div class="container-fluid mt-3">
      <label>Query by username:</label>
      <input
        type="text"
        placeholder="Enter a name"
        style="margin-left: 30px"
        v-model="name"
      />
    </div>
    <div class="container-fluid mt-3">
      <label>Query by pagination:</label>
      <input
        type="number"
        style="margin-left: 30px"
        min="0"
        placeholder="Enter an offset"
        v-model="skip"
      />
      <input
        type="number"
        style="margin-left: 30px"
        min="0"
        placeholder="Enter an limit"
        v-model="limit"
      />
    </div>
    <div class="container-fluid mt-3">
      <label>Query by number of accounts:</label>
      <input
        type="number"
        style="margin-left: 30px"
        min="0"
        placeholder="Enter an account size"
        v-model="accountSize"
      />
    </div>
    <div class="container-fluid mt-3">
      <button class="btn btn-success" @click="getUsersByPagination()">
        Search
      </button>

      <button
        class="btn btn-danger"
        style="margin-left: 30px"
        @click="resetButton()"
      >
        Reset
      </button>
    </div>

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
      name: null,
      accountSize: null,
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsersByPagination() {
      axios
        .get("/users", {
          params: this.axiosParams,
        })
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
    resetButton() {
      this.name = null;
      this.skip = null;
      this.limit = null;
      this.accountSize = null;
      this.getUsers();
    },
  },
   computed: {
      axiosParams() {
        const params = new URLSearchParams();

        if (this.accountSize != null) {
          params.append("accounts", this.accountSize);
        }

        if (this.skip != null && this.limit != null && this.name != null) {
          params.append("name", this.name);
        }

        if (this.skip != null && this.limit != null) {
          params.append("skip", this.skip);
          params.append("limit", this.limit);
        }

        return params;
      },
    },
};
</script>

<style>
</style>
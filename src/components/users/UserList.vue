<template>
  <div class="container">
    <h1 class="text-center"> User List </h1>
    <table class="table table-stripped">
      <thead>
        <th>User Id</th>
        <th>User Firstname</th>
        <th>User Lastname</th>
        <th>User Email</th>
        <th>User PhoneNumber</th>
        <th>User Roles</th>

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
import UserListItem from './UserListItem.vue'
export default {
  name: "UserList",
  components: {
    UserListItem,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get("/users").then((result) => {
        this.users = result.data;
      }).catch((error) => console.log(error));
    },
    isLoggedIn() {
      return this.$store.state.JWTtoken;
    },
  },
};
</script>

<style>
</style>
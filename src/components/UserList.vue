<template>
  <div class="container">
    <h1 class="text-center"> User List </h1>
    <table class="table table-stripped">
      <thead>
        <th>User Id</th>
        <th>User Username</th>
        <th>User Email</th>
        <th>User Firstname</th>
      </thead>
      <tbody>
        <tr v-for = "user in users" v-bind:key = "user.id">
          <td> {{user.userID}} </td>
          <td> {{user.address}} </td>
          <td> {{user.email}} </td>
          <td> {{user.firstName}} </td>
        </tr>
      </tbody>
    </table>
    </div>


</template>

<script>
import axios from "../axios-auth";
export default {
  name: "UserList",
  components: {
    
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
      });
    },
  },
};
</script>

<style>
</style>
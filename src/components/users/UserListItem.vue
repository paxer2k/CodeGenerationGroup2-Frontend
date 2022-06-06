<template>
  <tr>
    <td>{{ user.firstName }}</td>
    <td>{{ user.lastName }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.phoneNumber }}</td>
    <td>{{ user.address }}</td>
    <td>{{ user.currentDayLimit }}</td>
    <td>{{ user.dayLimit }}</td>
    <td>{{ user.roles }}</td>
    <td><button type="button" class="btn btn-warning" @click="updateUser(user.userID)">Edit</button></td>
    <td><button type="button" class="btn btn-danger" @click="deleteUser(user.userID)">Delete</button></td>
  </tr>
</template>

<script>
import axios from './../../axios-auth'
export default {
    name: "UserListItem",
    props: {
        user: Object,
    },
  methods: {
    deleteUser(userID) {
      axios
      .delete("/users/" + userID)
      .then((result) => {
        console.log(result);
        this.$emit("update");
      })
      .catch((error) => console.log(error));
    },
    updateUser(userID) {
      this.$router.push("/updateuser/" + userID)
    }
  }
};
</script>

<style>
</style>
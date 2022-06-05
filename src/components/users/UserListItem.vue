<template>
  <tr>
    <td>{{ user.userID }}</td>
    <td>{{ user.firstName }}</td>
    <td>{{ user.lastName }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.phone }}</td>
    <td>{{ user.roles }}</td>
  </tr>
</template>

<script>
export default {
    name: "UserListItem",
    props: {
        user: Object,
    }
};
</script>

<style>
</style>
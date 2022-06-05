<template>
  <tr>
    <td>{{ user.userID }}</td>
    <td>{{ user.address }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.firstName }}</td>
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
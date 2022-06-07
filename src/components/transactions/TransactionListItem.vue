<template>
  <tr>
    <td>{{ transaction.fromIBAN }}</td>
    <td>{{ transaction.toIBAN }}</td>
    <td>{{ transaction.amount }}</td>
    <td>{{ transaction.date }}</td>
    <td>{{ transaction.userID }}</td>

  </tr>
</template>

<script>
export default {
    name: "TransactionListItem",
    props: {
        transaction: Object,
    },
  methods: {

  }
};
</script>

<style>
</style>
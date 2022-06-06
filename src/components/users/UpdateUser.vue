<template>
  <section>
    <div class="container col-lg-5">
      <form ref="form">
        <h2 class="mt-3 mt-lg-5" style="text-align: center">Edit user</h2>
        <h5 class="mb-4"></h5>

        <div class="input-group mb-3">
          <span class="input-group-text">First name</span>
          <input type="text" class="form-control" v-model="user.firstName" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Last name</span>
          <input type="text" class="form-control" v-model="user.lastName" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Email</span>
          <input type="text" class="form-control" v-model="user.email" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Phonenumber</span>
          <input type="text" class="form-control" v-model="user.phoneNumber" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Address</span>
          <input type="text" class="form-control" v-model="user.address" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Transaction limit</span>
          <input
            type="text"
            class="form-control"
            v-model="user.transactionLimit"
          />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Day limit</span>
          <input type="text" class="form-control" v-model="user.dayLimit" />
        </div>

        <div class="input-group mt-4">
          <button
            type="button"
            class="btn btn-primary col-6"
            @click="this.updateUser()"
          >
            Update
          </button>
          <button
            style="text-align: center"
            type="button"
            class="btn btn-danger col-6"
            @click="this.$router.push('/users')"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "../../axios-auth";
export default {
  name: "UpdateUser",
  props: {
    userID: String,
  },
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
        transactionLimit: 0,
        dayLimit: 0,
      },
    };
  },
  mounted() {
    axios
      .get("/users/" + this.userID)
      .then((result) => {
        this.user = result.data;
      })
      .catch((error) => console.log(error));
  },

  methods: {
    updateUser() {
      axios
        .put("/users/" + this.userID, this.user)
        .then((result) => {
          console.log(result);
          alert(
            "User " +
              this.user.firstName +
              " " +
              this.user.lastName +
              " has been updated!"
          );
          this.$router.push("/users");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>
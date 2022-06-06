<template>
  <div class="container">
    <div class="main-body mt-5">
      <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  class="rounded-circle"
                  width="150"
                />
                <div class="mt-3">
                  <h4>{{ user.firstName }} {{ user.lastName }}</h4>
                  <p class="text-secondary mb-1">Full Stack Developer</p>
                  <p class="text-muted font-size-sm">Role: {{ user.roles }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">First Name</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user.firstName }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Last Name</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user.lastName }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary">{{ user.email }}</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Phone</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ user.phoneNumber }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Transaction limit</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  €{{ user.transactionLimit }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Day limit</h6>
                </div>
                <div class="col-sm-9 text-secondary">€{{ user.dayLimit }}</div>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div class="col-md-8" v-for:="(account, index) in user.accounts">
            Account #{{index+1}}
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">IBAN</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ account.iban }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Balance</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  €{{ account.balance }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Absolute Limit</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  €{{ account.absoluteLimit }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Account Type</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ account.accountType }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Account Status</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ account.accountStatus }}
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../axios-auth";
export default {
  name: "UserProfile",
  data() {
    return {
      user: [],
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios
        .get("/users/" + localStorage.getItem("userID"))
        .then((result) => {
          this.user = result.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>
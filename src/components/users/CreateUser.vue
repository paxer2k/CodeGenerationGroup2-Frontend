<template>
  <div class="container mt-3">
    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>
    <form>
      <h1 class="h3 mb-3 fw-normal">Create a user</h1>

      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          pattern="[a-zA-Z][a-zA-Z0-9\s]*"
          title="Fill in a correct firstname"
          v-model="user.firstName"
          placeholder="First name"
          required
        />
        <label for="floatingInput">First name</label>
      </div>

      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          pattern="[a-zA-Z][a-zA-Z0-9\s]*"
          title="Fill in a correct lastname"
          v-model="user.lastName"
          placeholder="Last name"
          required
        />
        <label for="floatingInput">Last name</label>
      </div>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          v-model="user.email"
          placeholder="name@example.com"
          required
        />
        <label for="floatingInput">Email address</label>
      </div>

      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          v-model="user.password"
          placeholder="Password"
          required
        />
        <label for="floatingPassword">Password</label>
      </div>

      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          title="Fill in a correct lastname"
          v-model="user.address"
          placeholder="Address"
          required
        />
        <label for="floatingInput">Address</label>
      </div>

      <div class="form-floating mt-4">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          title="Fill in a correct phone"
          v-model="user.phoneNumber"
          placeholder="Phone"
          required
        />
        <label for="floatingInput">Phone</label>
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="ROLE_CUSTOMER"
          id="flexCheckDefault"
          v-model="user.roles"
        />
        <label class="form-check-label" for="flexCheckDefault">
          ROLE_CUSTOMER
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="ROLE_EMPLOYEE"
          id="flexCheckChecked"
          v-model="user.roles"
          checked
        />
        <label class="form-check-label" for="flexCheckChecked">
          ROLE_EMPLOYEE
        </label>
      </div>

      <button
        class="w-100 btn btn-lg btn-success"
        type="button"
        @click="this.createUser()"
      >
        Create user
      </button>
      <div class="card-footer py-3 border-0">
        <div class="text-center text-light">
          Already have an account?
          <a href="/login" class="text-light">Login</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "../../axios-auth";

export default {
  name: "CreateUser",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        address: "",
        phoneNumber: "",
        roles: [],
      },
      errorMessage: "",
    };
  },
  methods: {
    createUser() {
      axios
        .post("/users", this.user)
        .then((result) => {
          console.log(result.headers);
          alert(
            "User " +
              this.user.firstName +
              " " +
              this.user.lastName +
              " has been created!"
          );
          this.$router.push("/");
        })
        .catch((error) => {
          this.errorMessage = error;
          console.log(error);
        });
    },
  },
};
</script>


<style scoped>
.body-login {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #05050894;
}

.form-login {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

#login-logo {
  width: 60%;
  height: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.form-login .checkbox {
  font-weight: 400;
}

.form-login .form-floating:focus-within {
  z-index: 2;
}

.form-login input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-login input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

#copyright-login {
  font-size: 0.8rem;
}

.form-floating {
  padding-bottom: 5px;
}
</style>
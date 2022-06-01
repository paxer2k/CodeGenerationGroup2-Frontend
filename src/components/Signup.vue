<template>
  <body class="body-login">
    <main class="form-login">

      <b-form @submit="signup">
        <h1 class="h3 mb-3 fw-normal">Please Signup</h1>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            pattern="[a-zA-Z][a-zA-Z0-9\s]*"
            title="Fill in a correct firstname"
            v-model="user.firstName"
            placeholder="First name"
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
          />
          <label for="floatingInput">Address</label>
        </div>

        <div class="form-floating">
          <input
            type="tel"
            class="form-control"
            id="floatingInput"
            title="Fill in a correct phone"
            v-model="user.phone"
            placeholder="Phone"
          />
          <label for="floatingInput">Phone</label>
        </div>

        <div class="form-floating">
          <input
            type="tel"
            class="form-control"
            id="floatingInput"
            title="Fill in a correct user type"
            v-model="user.userType"
            placeholder="User type"
          />
          <label for="floatingInput">User type</label>
        </div>

        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign Up
        </button>
        <div class="card-footer py-3 border-0">
          <div class="text-center text-light">
            Already have an account?
            <a href="/login" class="text-light">Login</a>
          </div>
        </div>
        <div v-if="error" id="alert-box">
          <div class="alert alert-danger" role="alert">
            {{ errorMessage }}
          </div>
        </div>
      </b-form>
    </main>
  </body>
</template>

<script>
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        address: "",
        phoneNumber: "",
        userType: "",
       },
        errorMessage: "",
    };
  },
  methods: {
    async signup() {

      try {
        await axios.post('/users', {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          address: this.address,
          phone: this.phone,
          userType: this.userType,
        });

        this.$router.push('/login');
      } catch (error) {
        this.errorMessage = error.response.data
      }

    }
  }
}
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
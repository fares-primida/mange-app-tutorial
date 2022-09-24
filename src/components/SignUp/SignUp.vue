<template>
  <form @click.prevent>
    <div class="row g-3 align-items-center">
      <h1>Sign Up</h1>
      <div class="col-auto d-block mx-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Your Name"
          v-model="name"
        />
        <span class="error-feedback" v-if="v$.name.$error">{{
          v$.$errors[0].$message
        }}</span>
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <input
          type="email"
          class="form-control"
          placeholder="Enter Your Email"
          v-model="email"
        />
        <span class="error-feedback" v-if="v$.email.$error">{{
          v$.$errors[0].$message
        }}</span>
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <input
          type="password"
          class="form-control"
          placeholder="Enter Your Phone password"
          v-model="pass"
        />
        <span class="error-feedback" v-if="v$.pass.$error">{{
          v$.$errors[0].$message
        }}</span>
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <button type="submit" @click="SignUpNow()" class="btn btn-primary">
          Sign Up
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          type="button"
          @click="redirectTwo({ val: 'Login' })"
          class="btn btn-link"
        >
          Login
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
  name: "SignUpForm",
  data() {
    return {
      v$: useVuelidate(),
      name: "",
      pass: "",
      email: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(5) },
      pass: { required, minlength: minLength(10) },
      email: { required, email },
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.redirectTwo({ val: "home" });
    }
  },
  methods: {
    ...mapActions(["redirectTwo"]),
    LoginPage() {
      this.$router.push({ name: "Login" });
    },
    async SignUpNow() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfully");
        const Result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          pass: this.pass,
        });
        if (Result.status == 201) {
          console.log("Added New users successfully");
          localStorage.setItem("user-info", JSON.stringify(Result.data));
          this.redirectTwo({ val: "home" });
        } else {
          console.log("Added New users Field");
        }
      } else {
        console.log("form validation feild");
      }
    },
  },
};
</script>

<style scoped>
.error-feedback {
  color: red;
  font-size: 0.85em;
}
</style>

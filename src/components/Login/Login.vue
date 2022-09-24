<template>
  <form @click.prevent>
    <h1>Login</h1>
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <input
          type="email"
          class="form-control"
          placeholder="Enter Your Email"
          v-model="email"
        />
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <input
          type="password"
          class="form-control"
          placeholder="Enter Your password"
          v-model="pass"
        />
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <button type="submit" class="btn btn-primary">Login</button>
        &nbsp;&nbsp;&nbsp;
        <button
          type="button"
          @click="redirectTwo({ val: 'SignUp' })"
          class="btn btn-link"
        >
          Sign Up
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
// import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
  name: "LoginForm",
  SetUp() {
    const state = reactive({
      pass: "",
      email: "",
    });
    const Rules = computed(() => {
      return {
        pass: { required },
        email: { required, email },
      };
    });
    const v$ = useValidate(state, Rules);
    return {
      state,
      v$,
    };
  },
  methods: {
    ...mapActions(["redirectTwo"]),
    SignUpPage() {
      this.$router.push({ name: "SignUp" });
    },
    async SignUpNow() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfully");
        // let Result = await axios.post(" http://localhost:3000/users", {});
      } else {
        console.log("form validation feild");
      }
    },
  },
};
</script>

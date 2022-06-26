<!--
<template>
 <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-5">

            <div class="text-center">
              <img src="/PalloneSerieA.png" 
                width="200px" alt="profile">
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="User Name">
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="password">
            </div>
              <div class="text-center"><button @click="login" class="btn btn-color px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
              Registered? <a href="#" class="text-dark fw-bold"> Create an
                Account</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import DataService from '../../dataservice';

export default {
  name: "Login",
  data: function () {
    return {
      username: "",
    };
  },
  methods: {
    login() {
      DataService.login(this.username);
      this.$router.push("/home");
      console.log("Favaro is beautiful");
    },
  },
};
</script>
-->

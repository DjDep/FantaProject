<template>
<div class="signup-form">
    <form action="/examples/actions/confirmation.php" method="post">
		<h2>Sign Up</h2>
        <div class="form-group">
        	<input type="text" class="form-control" name="username" placeholder="Username" required>
        </div>
        <div class="form-group">
        	<input type="email" class="form-control" name="email" placeholder="Email Address" required>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required>
        </div>        
        <div class="form-group">
			<label class="form-check-label"><input type="checkbox" required> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
        </div>
    </form>
	<div class="text-center">Already have an account? <a href="#">Login here</a></div>
</div>
</template>


<script>
export default {
  name: "SignUp",
  data: function () {
    return {
      username: "",
    };
  },
  methods: {
    SignUp: function () {
      DataService.SignUp(this.username);
      this.$router.push("/HomeView.vue");
    },
  },
};
</script>
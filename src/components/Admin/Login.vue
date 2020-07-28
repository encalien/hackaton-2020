<template>
  <div>
    <b-row class="justify-content-center" align-v="center">
      <b-col cols="10" sm="6" lg="4">
        <div class="content">
          <h4>PRIJAVA</h4>
          <p>Vnesite uporabniško ime in geslo.</p>

          <b-form @submit="login(true)">
            <b-form-group>
              <b-form-input
                class="input-field"
                id="username"
                v-model="form.username"
                type="text"
                placeholder="Uporabniško ime"
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <b-form-input
                class="input-field"
                id="password"
                v-model="form.password"
                type="password"
                placeholder="Geslo"
              ></b-form-input>
            </b-form-group>

            <b-alert variant="danger" :show="formInvalid">
              Za prijavo morate vnesti uporabniško ime in geslo.
            </b-alert>

            <b-button type="submit" variant="primary">PRIJAVA</b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: "",
          password: "",
        },
        formInvalid: false
      }
    },
    created() {
      const user = localStorage.currentUser && JSON.parse(localStorage.currentUser);
      if (user && user.isAdmin) {
        this.$router.push("admin");
      }
    },
    methods: {
      login(state="false") {
        if(this.form.username == "" || this.form.password == "") {
          this.formInvalid = true;
        } else {
          const user = {isAdmin: state, lastLoggedIn: new Date().getTime()};
          localStorage.currentUser = JSON.stringify(user);
          this.$router.push("admin");
        }
      }
    }
  }
</script>

<style scoped>
  .content {
    background-color: white;
    padding: 50px;
  }
</style>

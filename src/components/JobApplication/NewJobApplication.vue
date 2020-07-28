<template>
  <b-form @submit="onSubmit">

  <h4>ODDAJA VLOGE</h4>
  <p>Izpolnite spodnja polja in oddajte vlogo, če se želite potegovati za izbrano delovno mesto.</p>

    <b-form-group>
      <b-form-input
        class="input-field"
        id="firstName"
        v-model="form.firstName"
        placeholder="Ime"
      ></b-form-input>
    </b-form-group>

    <b-form-group>
      <b-form-input
        class="input-field"
        id="lastName"
        v-model="form.lastName"
        placeholder="Priimek"
      ></b-form-input>
    </b-form-group>

    <b-form-group>
      <b-form-input
        class="input-field"
        id="address"
        v-model="form.address"
        placeholder="Naslov"
      ></b-form-input>
    </b-form-group>

    <b-form-group>
      <b-form-textarea
        class="input-field"
        id="content"
        v-model="form.content"
        rows=6
        placeholder="Zakaj ste primerni za izbrano delo?"
      ></b-form-textarea>
    </b-form-group>

    <b-alert variant="danger" :show="formInvalid">
      Za oddajo vloge morate izpolniti vsa zahtevana polja.
    </b-alert>

    <b-button type="submit" variant="primary">ODDAJ</b-button>
  </b-form>
</template>

<script>
  import Store from "../../store"
  export default {
    name: "JobApplication",
    data() {
      return {
        form: {
          firstName: "",
          lastName: "",
          address: "",
          content: "",
          score: null
        },
        formInvalid: false
      }
    },
    methods: {
      onSubmit() {
        if (this.form.firstName == "" || this.form.lastName == "" || this.form.address == "" || this.form.content == "") {
          this.formInvalid = true;
        } else {
          Store.post("jobApplications", this.form)
          this.$emit("setConfirmedState", true);
        }
      }
    }
  }
</script>
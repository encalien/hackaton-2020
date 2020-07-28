<template>
  <div>
    <b-row class="justify-content-center" align-v="center">
      <b-col cols="10" sm="6" lg="4">
        <div class="content" v-on:setConfirmedState="setConfirmedState">
          <ConfirmedJobApplication v-if="confirmed" v-on:setConfirmedState="setConfirmedState" />
          <NewJobApplication v-else v-on:setConfirmedState="setConfirmedState" />
        </div>
        <RouterLink to="/admin" id="admin-link">Prijavi se kot administrator</RouterLink>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import NewJobApplication from "./NewJobApplication"
  import ConfirmedJobApplication from "./ConfirmedJobApplication"

  export default {
    name: "JobApplication",
    data() {
      return {
        confirmed: false
      }
    },
    components: {
      NewJobApplication,
      ConfirmedJobApplication
    },
    methods: {
      setConfirmedState(state) {
        this.confirmed = state;
      }
    }
  }
</script>

<style scoped lang="scss">
  .content {
    background-color: white;
    padding: 30px 50px;
  }

  #admin-link {
    display: block;
    margin: 20px auto;
    color: #e7f3f3;
    text-decoration: underline;
  }

  #admin-link:hover {
    color: darken(#e7f3f3, 10%);
  }
</style>

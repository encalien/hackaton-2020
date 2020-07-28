<template>
  <div>
    <font-awesome-icon class="fa" :icon="['far', 'check-circle']" size="7x" />

    <h4>VLOGA USPEŠNO ODDANA</h4>
    <p>Vaša vloga je bila oddana v preverjanje. Po pregledu Vas bodo naši uslužbenci o rezultatu obvestili preko elektronskega
      naslova, ki je naveden v vašem uporabniškem profilu.
    </p>

    <b-button variant="primary" v-on:click="renderNewForm">NOVA ODDAJA</b-button>
  </div>
</template>

<script>
  export default {
    name: "JobApplication",
    methods: {
      renderNewForm() {
        this.$emit("setConfirmedState", false);
      }
    }
  }
</script>

<style scoped>
  .fa {
    color: #55b8c5;
    margin-bottom: 20px;
  }
</style>

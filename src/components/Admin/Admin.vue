<template>
  <div>
    <b-row class="justify-content-center" align-v="center">
      <b-col cols="10">
        <div class="content">
          <h4>PREJETE VLOGE</h4>

          <div v-if="jobApplications.length == 0">
            <p>Za to delovno mesto ni bila oddana še nobena vloga.</p>
          </div>

          <div v-else id="applications-list">
            <div
              class="application-entry"
              v-for="(jobApp, index) in currentPageJobApplications"
              :key="`jobApp-${index}`"
              :items="jobApplications"
              :per-page="perPage"
              :current-page="currentPage">

              <b-row>
                <b-col cols=12 sm=12 md=6>
                  <b-row>
                    <b-col cols=6 sm=3 md=2 lg=2>
                      <h6>Ime</h6>
                      {{ jobApp.firstName }}
                    </b-col>
                    <b-col cols=6 sm=3 md=4 lg=2>
                      <h6>Priimek</h6>
                      {{ jobApp.lastName }}
                    </b-col>
                    <b-col cols=12 sm=6 md=6 lg=8>
                      <h6>Naslov</h6>
                      {{ jobApp.address }}
                    </b-col>
                  </b-row>
                  <hr>
                  <b-row>
                    <b-col cols=12>
                      <h6 class="inline">Oceni vlogo:</h6>
                      <span class="stars">
                        <font-awesome-icon v-for="n in 5" v-bind:key="n"
                          :icon="['fas', 'star']"
                          class="star-icon"
                          :class="colorClass(jobApp, n)"
                          v-on:click="setScore(jobApp, n)" />
                      </span>
                    </b-col>
                  </b-row>
                </b-col>

                <b-col cols=12 sm=12 md=6>
                  <b-row>
                    <b-col>
                      <h6>Opis</h6>
                      {{ jobApp.content }}
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </div>
          </div>

          <b-pagination
            class="pagination-controls"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="applications-list"
            size="sm"
            align="right"
          ></b-pagination>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import Store from "../../store"
  export default {
    name: "Admin",
    data() {
      return {
        perPage: 5,
        currentPage: 1,
        jobApplications: []
      }
    },
    created() {
      this.checkUserSession();
      this.jobApplications = Store.get("jobApplications") || []
    },
    computed: {
      rows() {
        return this.jobApplications.length
      },
      currentPageJobApplications() {
        return this.jobApplications.slice(
          this.perPage * (this.currentPage - 1),
          this.perPage * (this.currentPage)
        )
      }
    },
    methods: {
      checkUserSession() {
        const user = localStorage.currentUser ? JSON.parse(localStorage.currentUser) : null;
        if (user) {
          const now = new Date().getTime();
          const lastLoggedIn = user.lastLoggedIn;
          const loginExpired = now - lastLoggedIn > 24*60*60*1000;
          if (!loginExpired) { return; }
          localStorage.removeItem("currentUser");
        }
        this.$router.push("login");
      },
      setScore(jobApplication, starNumber) {
        jobApplication.score = starNumber;
        Store.put("jobApplications", jobApplication);
      },
      colorClass(jobApplication, starNumber) {
        if (jobApplication.score && jobApplication.score >= starNumber)
        {
          return "full";
        }
      }
    }
  }
</script>

<style scoped>
  hr {
    border: none;
    border-bottom: 1px solid lightgray;
    box-shadow: 0 0 1px 1px #eaeaea;
  }

  .inline {
    display: inline;
  }

  .content {
    background-color: white;
    padding: 50px;
    text-align: left;
  }

  .application-entry {
    margin: 20px auto;
    padding: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: #fafafa;
    background-clip: padding-box;
    box-shadow: 0 0 3px 3px #eaeaea;
  }

  .stars {
    margin-left: 16px;
  }

  .star-icon {
    color: lightgray;
    cursor: pointer;
    margin: 0 3px;
  }

  .full {
    color: gold;
  }
</style>
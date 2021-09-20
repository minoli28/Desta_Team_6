<template>
  <div class="container is-max-desktop">
    <div class="box">
      <h2 class="content"><b>Business Form</b></h2>
      <section align="left">
        <b-field label="Name">
          <b-input v-model="business.name" required></b-input>
        </b-field>
        <b-field label="Email">
          <b-input
            type="email"
            v-model="business.email"
            required
            maxlength="30"
          >
          </b-input>
        </b-field>
        <b-field label="Choose an Industry">
          <b-autocomplete
            rounded
            v-model="business.industry"
            :data="filteredDataArray"
            placeholder="e.g. Mining"
            icon="magnify"
            clearable
            @select="(option) => (selected = option)"
          >
            <template #empty>No results found</template>
          </b-autocomplete>
        </b-field>
        <b-field label="Location">
          <b-input v-model="business.location"></b-input>
        </b-field>
        <b-field label="Telephone">
          <b-input v-model="business.telephone" required></b-input>
        </b-field>
        
        <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
          <template #trigger="props">
            <div
              class="card-header"
              role="button"
              aria-controls="contentIdForA11y3"
            >
              <p class="card-header-title">
                Add Business Details
              </p>
              <a class="card-header-icon">
                <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
              </a>
            </div>
          </template>
          <div style="padding: 15px">
            <b-field label="Website">
              <b-input v-model="business.website" placeholder="https//:"></b-input>
            </b-field>
            <b-field label="Instagram Handle">
              <b-input v-model="business.insta_handle" placeholder="@"></b-input>
            </b-field>
          </div>
        </b-collapse>
      </section>
      <button
        @click="ShowText = true"
        class="button is-primary"
        style="margin-top: 5px"
      >
        Submit
      </button>
    </div>
    <div v-if="ShowText">
      <pre style="max-height: 400px"><b>Business Object:</b>{{ business }}</pre>
    </div>
    <a href="/userform">
      <p class="content"><b>Not a Business? Use this form</b></p>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ShowText: false,
      business: { industry: "" },
      data: [
        "Food",
        "Beauty",
        "Fashion",
        "Consultants",
        "HOW TO",
        "Photography",
        "Health",
        "Community",
        "Art",
        "Music & Dance",
        "Hair",
        "Other Services",
      ],
      name: "",

      selected: null,
    };
  },
  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.business.industry.toLowerCase()) >= 0
        );
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  text-decoration: underline;
  text-emphasis-color: blue;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="container is-max-desktop">
    <div class="box">
        <h2 class="content"><b>Business Form</b> </h2>
      <section align= "left">
        <b-field label="Name">
          <b-input v-model="business.name"></b-input>
        </b-field>
        <b-field label="Email">
          <b-input type="email" v-model="business.email" maxlength="30">
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
          <b-input v-model="business.telephone"></b-input>
        </b-field>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      ShowText: false,
      business: { industry: "" },
      data: [
        "Industrial Unions",
        "Insurance",
        "Internet",
        "Israel Policy",
        "Labor",
        "Lawyers & Lobbyists",
        "Lawyers / Law Firms",
        "Leadership PACs",
        "LGBTQIA Rights & Issues",
        "Liberal/Democratic",
        "Liquor, Wine & Beer",
        "Livestock",
        "Lobbyists",
        "Lodging / Tourism",
        "Logging, Timber & Paper Mills",
        "Manufacturing, Misc",
        "Marine Transport",
        "Meat processing & products",
        "Medical Supplies",
        "Mining",
        "Engineering",
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

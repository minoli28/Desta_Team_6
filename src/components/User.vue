<template>
  <div class="container is-max-desktop">
    <div class="box ">
        <p class="content"><b>User Form</b> </p>
      <section align="left">
        <b-field label="Name">
          <b-input v-model="user.name"></b-input>
        </b-field>
        <b-field label="Email">
          <b-input type="email" v-model="user.email" maxlength="30"> </b-input>
        </b-field>
        <b-field label="Choose Industry Interest">
          <b-autocomplete
            rounded
            v-model="name"
            :data="filteredDataArray"
            placeholder="e.g. Mining"
            icon="magnify"
            clearable
            @select="(option) => (selected = option)"
          >
            <template #empty>No results found</template>
          </b-autocomplete>
        </b-field>
        <!-- <b-field label="Location">
          <b-input v-model=""></b-input>
        </b-field> -->
        <b-field label="Telephone">
          <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="Choose Industry Interest">
          <b-taginput
            v-model="tags"
            :data="filteredTags"
            autocomplete
            :allow-new="true"
            field="user.interest"
            icon="label"
            placeholder="Add an Interest"
            @typing="getFilteredTags"
          >
          </b-taginput>
        </b-field>
        Interest:{{ user.interest }}
        <pre style="max-height: 400px"><b>Tags:</b>{{ tags }}</pre>
      </section>
        <button class="button is-primary" style="margin-top: 5px">Sign in</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      tags: [],
      filteredTags: [],
      isSelectOnly: false,
      allowNew: false,
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
        "Marijuana",
        "Marijuana",
        "Marine Transport",
        "Meat processing & products",
        "Medical Supplies",
        "Mining",
      ],
      name: "",
      selected: null,
    };
  },
  methods: {
    getFilteredTags(text) {
      console.log(text)
      this.filteredTags = this.data.filter((option) => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(text.toLowerCase()) >= 0
        );
      });
    },
  },
  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
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

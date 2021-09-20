<template>
  <div class="container is-max-desktop">
    <div class="box">
      <p class="content"><b>User Form</b></p>
      <section align="left">
        <b-field label="Name">
          <b-input v-model="user.name"></b-input>
        </b-field>
        <b-field label="Email">
          <b-input type="email" v-model="user.email" maxlength="30"> </b-input>
        </b-field>
        <!-- <b-field label="Location">
          <b-input v-model=""></b-input>
        </b-field> -->
        <b-field label="Telephone">
          <b-input v-model="user.telephone"></b-input>
        </b-field>

        <!-- <b-field label="Choose Industry Interest">
          <b-taginput
            v-model="user.tags"
            :data="filteredTags"
            autocomplete
            :allow-new="true"
            field="user.interest"
            icon="label"
            placeholder="Add an Interest"
            @typing="getFilteredTags"
          >
          </b-taginput>
        </b-field> -->
        <b-field label="Personal Interest">
          <b-select
            expanded
            clearable
            v-model="option"
            @input="changeOption(option)"
            placeholder="Select an Interest"
          >
            <option v-for="option in data" :value="option" :key="option">
              {{ option }}
            </option>
          </b-select>

          <button
            v-if="option"
            class="button"
            style="margin-top: 10px; color: red"
            @click="user.chosen_option = []"
          >
            Clear
          </button>
        </b-field>
        <div v-if="option != ''">
          <pre
            style="max-height: 400px"
          ><b>Chosen Industries:</b> {{user.chosen_option}}</pre>
        </div>
      </section>
      <button
        @click="submit()"
        class="button is-primary"
        style="margin-top: 5px"
      >
        Submit
      </button>
    </div>
    <div v-if="ShowText">
      <pre style="max-height: 400px"><b>User Object:</b>{{ user }}</pre>
    </div>
    <a href="/businessform">
      <p class="content"><b>Not an Individual? Use this form</b></p>
    </a>
  </div>
</template>

<script>
import { API } from 'aws-amplify';
import { createUser } from '@/graphql/mutations';
import axios from "axios";
export default {
  data() {
    return {
      option: "",
      ShowText: false,
      user: { chosen_option: [] },
      tags: [],
      filteredTags: [],
      isSelectOnly: false,
      allowNew: false,
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
  methods: {
    changeOption(option) {
      console.log(option);

      // this.chosen_option.forEach(element => {
      //   if (element == option){
      //     var elementIndex = this.chosen_option.indexOf(element);
      //     this.chosen_option.splice(elementIndex, 1);

      //     this.option = ""
      //   }
      // });
      if (this.user.chosen_option.some((opt) => opt == option)) return;
      this.user.chosen_option.push(option);
      console.log("done");
    },
    getFilteredTags(text) {
      console.log(text);
      this.filteredTags = this.data.filter((option) => {
        return option.toString().toLowerCase().indexOf(text.toLowerCase()) >= 0;
      });
    },
    submit() {
      this.ShowText = true;
      // const headers = {
      //   Authorization: "Bearer my-token",
      //   "My-Custom-Header": "foobar",
      // };
      // axios
      //   .post("[website http address]:PORT/addUser/", this.user, { headers })
      //   .then((response) => console.log(response));
      try {
         await API.graphql({
        query: createUser,
        variables: {input: this.user},
      });
      } catch (error) {
        console.log(error)
      }
    },
  },
  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return (
          option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
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

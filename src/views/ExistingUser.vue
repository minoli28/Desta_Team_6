<template>
  <div class="existing-user container is-max-desktop">
    <b-field class="is-primary" label="Email" v-if="!userRegistered">
      <b-input class="is-primary" type="email" v-model="email" maxlength="30">
      </b-input>
    </b-field>
    <button
      class="button is-primary"
      style="margin-top: 10px; "
      v-if="!userRegistered"
      @click="getUsers()"
    >
      Search User
    </button>
    <Cards :businesses="businesses" v-if="userRegistered" />
    <div v-if="hide">
      Thanks for using Desta's Platform. We couldn't find any information for you😥
    </div>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { listBusinesses } from "@/graphql/queries";
import { listUsers } from "@/graphql/queries";
import Cards from "@/components/Cards.vue";
export default {
  name: "",
  components: { Cards },
  data() {
    return {
      email: "",
      hide: null,
      registeredUser: null,
      businesses: [],
      userRegistered: false,
    };
  },
  methods: {
    async getBusinesses() {
      console.log(this.registeredUser.chosen_industries);
      this.registeredUser.chosen_industries = JSON.parse(
        this.registeredUser.chosen_industries
      );
      for (let i = 0; i < this.registeredUser.chosen_industries.length; i++) {
        let filter = {
          industry: {
            eq: this.registeredUser.chosen_industries[i], // filter priority = 1
          },
        };
        try {
          const businesses = await API.graphql({
            query: listBusinesses,
            variables: { filter: filter },
          });
          console.log(businesses.data.listBusinesses.items);
          // this.businesses.push(businesses.data.listBusinesses.items);
          this.businesses = this.businesses.concat(
            businesses.data.listBusinesses.items
          );
          if (this.businesses.length <= 1) {
            this.hide = true;
          }
          // this.businesses = businesses.data.listBusinesses.items;
        } catch (error) {
          console.log(error);
        }
      }
    },
    async getUsers() {
      try {
        let filter = {
          email: {
            eq: this.email, // filter priority = 1
          },
        };
        console.log(filter);
        const user = await API.graphql({
          query: listUsers,
          variables: { filter: filter },
        });
        console.log(user.data.listUsers.items);
        this.registeredUser = user.data.listUsers.items[0];
        this.userRegistered = true;
        this.getBusinesses();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

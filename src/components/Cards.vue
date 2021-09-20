<template>
  <div class="container is-max-desktop">
    <div v-for="business in businesses" v-bind:key="business.id">
      <Card :business="business"/>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: { Card },
  props: ["businesses"],
  data() {
    return {
      // businesses: [
      //   {
      //     id: "1",
      //     industry: "Community",
      //     name: "Techereza Tech",
      //     email: "minanihertierluc@gmail.com",
      //     telephone: "0788988500",
      //     location: "QC Monteal Street",
      //     website: "https://techereza.com/services",
      //     insta_handle: "@this_is_my_guy",
      //   },
      // ],
    };
  },
};
</script>

<style></style>

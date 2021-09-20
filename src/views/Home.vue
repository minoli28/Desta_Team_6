<template>
  <div class="container is-max-desktop">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <Business msg="Welcome to Your Vue.js App"/> -->
    <section class="hero is-large">
      <div class="hero-body">
    <div class="container has-text-centered">
        <div class="buttons columns is-align-items-center">
            <b-button class="column is-secondary" tag="router-link"  to="/businessform" size="is-large">I am a business</b-button>
            <b-button class="column is-primary" tag="router-link" to="/userform" size="is-large">I am an individual</b-button>
        </div>
    </div>
  </div>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src
// import Business from '@/components/Business.vue'

export default {
  name: 'Home',
  components: {
    // Business
  }
}
</script>


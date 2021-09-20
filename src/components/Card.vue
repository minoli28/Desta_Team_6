<template>
<div class="container is-max-desktop" style="margin-top: 20px">
  <div class="card">
    <header class="card-header">
      <a :href="business.website"><p class="card-header-title">
        {{business.name}}
      </p>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        <b><b-icon
                icon="home" type="is-primary">
            </b-icon> Industry: {{business.industry}} </b> <br>
        <b><b-icon
                icon="map">
            </b-icon> Location: {{business.location}} </b> <br>
        <b><b-icon
                icon="account" >
            </b-icon> E-mail: {{business.email}} </b> <br>
        <b>
          <b-icon
                icon="phone" type="is-success">
                
            </b-icon> Phone: {{business.telephone}} </b> <br>
        <b><b-icon
                icon="instagram"
                color="red"
                type="is-danger">
            </b-icon> Instagram: {{business.insta_handle}} </b> <br>
        <!-- <b>Website: {{business.website}} </b> <br> -->
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item"> <b-icon
                icon="star" >
            </b-icon> Add To Favourites</a>
      <a :href="business.website" class="card-footer-item"><b-icon
                icon="eye" >
            </b-icon> View</a>
    </footer>
  </div>
</div>
</template>


<script>
export default {
  name: "Card",
  data() {
    return {
      business:{
  "industry": "Community",
  "name": "Techereza Tech",
  "email": "minanihertierluc@gmail.com",
  "telephone": "0788988500",
  "location": "QC Monteal Street",
  "website": "https://techereza.com/services",
  "insta_handle": "@this_is_my_guy"
}
    }
  },
}
</script>
<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>      
          <b-nav-item><b-link :to="{ path: '/' }">Home</b-link></b-nav-item>    
          <b-nav-item><b-link :to="{ path: '/about' }">About</b-link></b-nav-item>                        
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Vue_Header",
};
</script>

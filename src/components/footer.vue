<template>
  <!-- Footer Start -->
  <div>
  <footer  v-if="!isMobile()" class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
        <nav class="navigation navigation--inline">
    <ul>
      <li>
      <router-link to="/home" class="a">
         
         <i class="fas fa-home"></i>
             <p> Home</p>
      </router-link>
      </li>
      <li>
      <router-link to="/store/new" class="a">
          <i class="fas fa-plus"></i>
            <p> Add to Store</p>
      </router-link>
      </li>
      <li>
      <router-link to="/pending" class="a">
           <i class="fas fa-layer-group"></i>
           <p> Pending</p>
      </router-link>
      </li>
      <li>
      <router-link to="/account" class="a">
            <i class="fas fa-user"></i>
            <p> Account</p>
      </router-link>
      </li>
    
    </ul>
  </nav>
        </div>
      </div>
    </div>
  </footer>



 <!-- <footer  v-if="!isMobile()" class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          2020 &copy; Divo Logistics.. All Rights Reserved. 
        </div>
      </div>
    </div>
  </footer> -->


  <footer  v-if="isMobile()" class="footer_mobile" >

 <body class="align">

  <nav class="navigation navigation--inline">
    <ul>
      <li>
      <router-link to="/home">
         
         
             <p> Home</p>
      </router-link>
      </li>
      <li>
      <router-link to="/home">
        
          <span class="invisible">Search</span>
            <p> sddsd</p>
      </router-link>
      </li>
      <li>
      <router-link to="/home">
         
          <span class="invisible">Products</span>
      </router-link>
      </li>
      <li>
      <router-link to="/home">
          
          <span class="invisible">Notifications</span>
      </router-link>
      </li>
      <li>
      <router-link to="/home">
          
          <span class="invisible">Profile</span>
      </router-link>
      </li>
    </ul>
  </nav>

  
</body>
  </footer>
  <!-- end Footer -->

  </div>
</template>

<style scoped>

.footer{
  position: fixed;
  display: block;

  /* check this  */
}


.router-link-active{
  color: rgb(24, 46, 46)
}

.invisible {
  left: -999px;
  overflow: hidden;
  position: absolute;
  top: -999px;
}

/* helpers/align.css */

.align {
  justify-content: center;
  align-items: center;
  display: flex;
}

/* layout/base.css */

:root {
  --body-background-color: #82a8ee;
}

html {
  height: 100%;
}

body {
  background-color: white;
  margin: 0;
  min-height: 100%;
}

/* modules/anchor.css */

a {
  outline: 0;
}

/* modules/icon.css */

:root {
  --icon-fill-color: #c6b997;
}

.icons {
  display: none;
}

.icon {
  display: inline-block;
  fill: var(--icon-fill-color);
  font-size: 1rem;
  height: 1em;
  vertical-align: middle;
  width: 1em;
}

.icon--2x {
  font-size: 2rem;
}

/* modules/image.css */

svg {
  max-width: 100%;
}

/* modules/navigation.css */

:root {
  --navigation-background-color: white;
  --navigation-border-radius: 0.25rem;

  --navigation-anchor-padding: 0;
  --navigation-anchor-text-decoration: none;
}

.navigation {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  height: 90px
}

.navigation ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.navigation .a {
  display: block;
  padding-top: 1.5rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  position: relative;
  text-decoration: none;
}

.navigation .a:focus::after,
.navigation .a:hover::after {
  opacity: 1;
}

.navigation .a::after {
  /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3); */
  content: '';
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  /* transition: opacity 0.3s; */
  width: 100%;
  font-size: 1.5em;
}

.navigation--inline ul {
  display: flex;
}

.fas{
  font-size: 1.5em;
}

.navigation .a:active::after{
color: black
}
</style>


<script>


export default {
 

methods: {
 isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 }
}

}
</script>




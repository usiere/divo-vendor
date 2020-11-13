<template>
<div class="main">

<!-- Bmodal -->
  <b-modal id="no-district" hide-footer title="Not Available" centered>
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-5 col-8">
          <div class="text-center">
            <div>
              <img src="@assets/images/not-found.png" alt class="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center">
          <h3 class="mt-3">District not Available in BETA</h3>
          <!-- <p class="text-muted mb-5">
            All items that you add from the Divo inventory
            <br />Will be shown in the your Store.
          </p> -->
         
        </div>
      </div>
     
    </b-modal>


<div class="container">
 
  <router-link to="/store/new/Katampe" id="color1" class="section" >
    <div class="content">
      <h1>Katampe </h1>
    </div>
    <div class="overlay"></div>
    </router-link>
    
  <div id="color2" class="section" v-b-modal.no-district>
    <div class="content">
      <h1>Utako</h1>
    </div>
    <div class="overlay"></div>
  </div>
  <div id="color1" class="section" v-b-modal.no-district>
    <div class="content">
      <h1>Asokoro</h1>
    </div>
    <div class="overlay"></div>
  </div>
   <div id="color2" class="section" v-b-modal.no-district>
    <div class="content">
      <h1>Maitama</h1>
    </div>
    <div class="overlay"></div>
  </div>
  
</div>

<div class="container">
  <div id="color1" class="section" v-b-modal.no-district>
    <div class="content">
      <h1>Gwarinpa</h1>
    </div>
    <div class="overlay"></div>
  </div>
  <div id="color2" class="section" v-b-modal.no-district>
    <div class="content">
      <h1>Garki</h1>
    </div>
    <div class="overlay"></div>
  </div>
  <div id="color2" class="section" v-b-modal.no-district>
    <div class="content">
      <h1>Wuse</h1>
    </div>
    <div class="overlay"></div>
  </div>
   <div id="color2" class="section" v-b-modal.no-district>
    <div class="content">
      <h1>Apo</h1>
    </div>
    <div class="overlay"></div>
  </div>
  
</div>
</div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

.main{
  padding-top: 50px
}

.container {
  display: flex;
}

.section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  color: #fff;
  transition: flex .4s ease;
  position: relative;
  margin-bottom: 30px;
  margin-left: 10px;
  outline: none;
   border: 5px solid white
}

.section .overlay {
 
  width: 100%;
  height: 100%;
  position: absolute;
  transition: background-color .8s ease;
}

.section .content {
  z-index: 2;
}

.section:hover {
  flex: 2;
}

.section:hover .overlay {
  background-color: green;
  opacity: 40%
  
}

#color1 {
 background-color:white;

}

#color2 {
  background-color:white;
 
}

h1{
  color: black
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .card {
    width: 44%;
    display: block;
    margin-bottom: 20px;
  }

  .container {
  display: grid;
  grid-template-columns: 50% 50%
}
  
}
</style>

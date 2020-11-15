<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import  ItemCard from '@src/router/views/pages/nests/ItemCard'
import axios from 'axios'
import { mapActions} from 'vuex'


export default {
	page: {
		title: 'Nests',
		meta: [{ name: 'description', content: appConfig.description }],
    },
    
	components: {
		VuePerfectScrollbar,
        Layout,
        ItemCard
    },
    
     data() {
    return {
                 cat_n: '',
                 cat_id: '',
                 img_upd1: null,
                 img_upd2: null,
                 img_upd3: null,
                 item_name: '',
                 item_price: '',
                 item_size: '',
                 item_stock:'',
                 item_process:'',
                 item_desc:'',
                 upd1: null,
                 upd2: null,
                 upd3: null,
                 upd4: null,
                 photos: []

  }},

  mounted(){
      this.cat_n = this.$route.params.cat_picked
      this.cat_id = this.$route.params.id

    console.log(this.cat_n)
    console.log(this.cat_id)
  },

    methods: {
    onImg1Change(e) {
      const file = e.target.files[0];
      this.img_upd1 = URL.createObjectURL(file);
      this.upd1 = file
    },

      onImg2Change(e) {
      const file = e.target.files[0];
      this.img_upd2 = URL.createObjectURL(file);
      this.upd2 = file
    },
      onImg3Change(e) {
      const file = e.target.files[0];
      this.img_upd3 = URL.createObjectURL(file);
      this.upd3 = file
    },
      onImg4Change(e) {
      const file = e.target.files[0];
      this.img_upd4 = URL.createObjectURL(file);
      this.upd4 = file
    },





// not finished yet
 
   submitItem:  async function() {
      const item = {
                 img_upd1: this.img_upd1,
                 img_upd2: this.img_upd2,
                 img_upd3: this.img_upd3,
                 item_name: this.item_name,
                 item_price: this.item_price,
                 item_size: this.item_size,
                 item_stock:this.item_stock,
                 item_process:this.item_process,
                 item_desc:this.item_desc
      } 

console.log(item)
   



// console.log(item)
//       const form_data = new FormData();

// for ( const key in item ) {
//     form_data.append(key, item[key]);
// }


console.log(form_data)


  const accessToken = await this.$auth.getTokenSilently();
      console.log(this.$auth.user.email + '   This is Usieres email')
      
      
      // Use Axios to make a call to the API
  await axios({
  method: 'post',
  url:"/api/item",
  headers: {
            Authorization: `Bearer ${accessToken}`
          },
  data: form_data,
 
});


    },

// bringing in vuex for items
 ...mapActions("items",['addItem', 'postItem']),
        submitItemV(e) {
          e.preventDefault();

this.photos = [this.upd1, this.upd2, this.upd3]
// Using form data to upload pictures
      const form_data = new FormData();
    form_data.append("img1", this.upd1);
    form_data.append("img2", this.upd2);
    form_data.append("img3", this.upd3);
      form_data.append("name", this.item_name);
      form_data.append("price", this.item_price);
       form_data.append("size", this.item_size);
        form_data.append("stock", this.item_stock);



//
        const item = {
            img_upd1: this.img_upd1,
                 img_upd2: this.img_upd2,
                 img_upd3: this.img_upd3,
                 item_name: this.item_name,
                 item_price: this.item_price,
                 item_size: this.item_size,
                 item_stock:this.item_stock,
                 item_process:this.item_process,
                 item_desc:this.item_desc,
                //  form_data
        }

          console.log("this is item" + JSON.stringify(item))
          this.addItem(item)
          this.postItem(form_data)

          



// Vuex ends here
       

 

    },
  }


}

</script>

<template>
	<Layout>
	<div class="d-flex flex-column">
		<div class= "heading">
       <h1 class="home-title">
  <span>{{$auth.user.given_name}}'s Divo / {{cat_n}}</span>
  <div class="sall"><button  v-b-modal.add-modal  class=" btn btn-success ml-2">Add new Item <i class="fas fa-plus"></i></button> </div>
</h1>
 

	    </div>
		 
	
				<ItemCard />
		


      

    </div>

  <b-modal id="add-modal" title="" size="lg"  hide-header hide-footer>
    submitItemV
   <form v-on:submit=" submitItemV">
       <!-- <form v-on:submit.prevent="submitItem"> -->
<div class="addcard">
    <div class="leftadd">
          <img class="img_main" width="250px" height="250px"  v-if="img_upd1" :src="img_upd1"/>
 <input style= "display: none" type="file" @change="onImg1Change" ref="fileInput1" />
 <button @click="$refs.fileInput1.click()" class="btn btn-success ml-2"> Upload main Image</button>

 <div class="side_pics">  
            <img class="img_side" width="50px" height="50px" v-if="img_upd2" :src="img_upd2"/>
             <input type="file" @change="onImg2Change" />

                  <img class="img_side"  width="50px" height="50px" v-if="img_upd3" :src="img_upd3" />
                 <input type="file" @change="onImg3Change" />

            
               
                 <div class="form-group">
              <h6>Item name</h6>
                <input v-model="item_name" type="text" class="form-control item" id="qty" name="qty" placeholder="e.g. Black loius shoe" />
            </div>
                 <div class="form-group">
              <h6>Price (N)</h6>
                <input v-model="item_price" type="number" class="form-control item" id="qty" name="qty" placeholder="1000" />
            </div>
          

                 </div>
       
      
        </div>
          <div class="card-body">
       
          
                  <div class="form-group">
              <h6>Size</h6>
                <input v-model="item_size" type="text" class="form-control item" id="qty" name="qty" placeholder="1" />
            </div>
                 
             <p class="modal_notice"> *All deliveries(Beta) are made between 4pm - 6pm daily* </p>
               
               <div class="form-group">
              <h6>No in stock</h6>
                <input v-model="item_stock" type="number" class="form-control item" id="deli_addy" name="deli_addy" placeholder="15 units" />
            </div>
              <div class="form-group">
              <h6>Process time</h6>
                <input v-model="item_process" type="text" class="form-control item" id="deli_addy" name="deli_addy" placeholder="Set delivery location" />
            </div>
              
            <label for="w3review"> <h6>Description</h6></label>

<textarea v-model="item_desc" type="text" class="form-control item" id="deli_addy" name="deli_addy" rows="4" cols="50">
At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
</textarea>
     
                <div class="form-group">
                <button type="submit" class="btn btn-success ml-2" @click="$bvModal.hide('add-modal')">Add Item</button>
            </div>
      
          </div>
          </div>
         </form>


  </b-modal>

    
    
	</Layout>
</template>


<style scoped>

 .mb-4 {
      padding-left: 85%

 }

.heading {
	
    padding-left: 3% ;
	padding-top: 2%;
	

}

/* Basic styles */
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root{
    --bg-color: #D8D8D8;
}


h1{
    font-size: 3em;
    font-weight: normal;
}

/* title styles */
.home-title span{
    position: relative;
    overflow: hidden;
    display: block;
    line-height: 1.2;
}

.home-title span::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation: a-ltr-after 2s cubic-bezier(.77,0,.18,1) forwards;
    transform: translateX(-101%);
}

.home-title span::before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--bg-color);
    animation: a-ltr-before 2s cubic-bezier(.77,0,.18,1) forwards;
    transform: translateX(0);
}

.home-title span:nth-of-type(1)::before,
.home-title span:nth-of-type(1)::after{
    animation-delay: 1s;
}

.home-title span:nth-of-type(2)::before,
.home-title span:nth-of-type(2)::after{
    animation-delay: 1.5s;
}

.sall{
    padding-left: 700px;
}

@keyframes a-ltr-after{
    0% {transform: translateX(-100%)}
    100% {transform: translateX(101%)}
}

@keyframes a-ltr-before{
    0% {transform: translateX(0)}
    100% {transform: translateX(200%)}
}

/* modal card */


:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: .75rem;
}


.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 2rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

.btn-google {
  color: white;
  background-color: #ea4335;
}

.btn-facebook {
  color: white;
  background-color: #3b5998;
}

.modal_notice{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 13px;
  font-style: initial;
  color: #008080;
}


.price1{
  font-size: 20px;
}

.state{
  font-size: 15px;

}

.delete{
  padding-left: 30px;
}

.fa-window-close{
  width: 7px;
  padding-left: 200px;
  outline:none
}
/* Fallback for Edge
-------------------------------------------------- */

.addcard{
    display: grid;
    grid-template-columns: 50% 50%;
}

.leftadd{
    border-right: 2px solid black;
}

.addinfo{
    width: 300px;
    height: 50px;
    background-color: green;
    border-radius: 30%;
    color: white;
}

.side-pics{
    display: grid;
    display: inline;
    grid-template-columns: 30% 30% 30%;
}

.img_side{
    margin: 30px;
  
}

@supports (-ms-ime-align: auto) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */

@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}

/* Checking file upload */
#app {
  padding: 20px;
}

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}
</style>


<template>
<div>
  
 <!-- Onboarding Modal for application  -->
 <div>
    <b-modal ref="my-modal" hide-footer title="Empty Store" centered>
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
          <h3 class="mt-3">Hey {{$auth.user.given_name}}, it seems your store is empty</h3>
          <p class="text-muted mb-5">
            All items that you add from the Divo inventory
            <br />Will be shown in the your Store.
          </p>
           <router-link to="/store/new" class="btn btn-success ml-2" exact>Add to store</router-link>
        </div>
      </div>
     
    </b-modal>
  </div>


<!-- Delete nest Modal -->

 <b-modal id="del-modal" hide-footer title="Remove from Store" centered>
      <div class="row">
        <div class="col-12 text-center">
          <h3 class="mt-3">Are you sure you want to delete <h4>'{{del_item}} ({{'per ' + del_per}})'</h4>from your store?</h3>
        
           <button @click="deleteNest(), refreshPage()"  class="btn btn-success ml-2" exact>Yes</button>
            <button @click="$bvModal.hide('del-modal')" class="btn btn-success ml-2" exact>No</button>
        </div>
      </div>
     
    </b-modal>

<!-- Order Modal  -->
  <b-modal id="modal-1" title=""  hide-header hide-footer>
 

          <div class="card-body">
            	<span class="logo-lg">
					<img src="@assets/images/logo.png" width="125" height="125" />
					<span class="d-inline h5 ml-2 text-logo">ORDER ITEM</span>
				</span>
            <div class="item_info">
              <div class="item_img">	<img  v-bind:src=" info_img" width="125" height="125" /></div>
              
              <div class="item_text"><strong><p>{{info_item}}</p></strong>
              <p>₦{{info_price}}</p>
              <p>Per {{info_per}}</p>
              
              
              </div> 
             
              </div>
            
        
            <form v-on:submit.prevent="submitOrder">

                  <div class="form-group">
              <h6>Quantity</h6>
                <input v-model="qty" type="number" class="form-control item" id="qty" name="qty" placeholder="1" />
            </div>
             <p class="modal_notice"> *All deliveries(Beta) are made between 4pm - 6pm daily* </p>
                <div class="form-group">
              <h6>Set delivery Day</h6>
               
                <b-form-datepicker id="example-datepicker" v-model="deli_time" class="mb-2"></b-form-datepicker>
            </div>
           
       
          
               <div class="form-group">
              <h6>Address (Leave blank if profile address)</h6>
                <input v-model="deli_addy" type="text" class="form-control item" id="deli_addy" name="deli_addy" placeholder="Set delivery location" />
            </div>
     
            <div class="form-group">
                <button type="submit"  class="btn btn-block create-account" @click="$bvModal.hide('modal-1'), toast('b-toaster-top-center')"  >Place Order</button>
            </div>
        </form>
          </div>
       


  </b-modal>



<!-- Recurring Modal  -->
   <b-modal id="modal-2" title="" centered hide-header>
 

         <h4>Recurring is not available in BETA </h4>
       


  </b-modal>
  

 <!-- Main Section begins  -->
 <!-- Getting Items from User store  -->

 
 <section class="row" v-if="user_store && user_store.length >0">

 
  
<article class="card card--2" v-for="(nest, index) in user_store" v-bind:key="nest._id">
  <div class="card__info-hover">
      <div class="card__clock-info">
        
      </div>
    
  </div>
  


 <div class="card__img"><img class="img" v-bind:src="nest.item_img " /></div>


  <a href="#" class="card_link">
     <div v-bind:style="{ 'background-image': 'url(' + nest.item_img + ')' }" class="card__img--hover"></div>
   </a>
   
  <div class="card__info">
      <h3 class="card__title">{{nest.item}}</h3> <i  v-b-modal.del-modal @click="getIdNest(nest._id), sendDelInfo(nest.item, nest.per)" class="far fa-window-close"></i>
     <div>added: <strong class="">{{nest.added}}</strong></div> 
    <div class= "state"> current <i class="fas fa-money-bill-wave"></i><strong class="price1">: ₦{{nest.price}}</strong> </div>
     <div class= "state">type: <strong class="price1"> Basket</strong> </div>
        <div>district: <strong class="price1">Katampe</strong></div> 
     
  
    <span class="card__by"> <a
							href="javascript: void(0);"
							class="btn btn-primary btn-sm float-right"
           v-b-modal.modal-1
              @click ="getIdOrder(nest._id), getItemInfo(nest.item, nest.per, nest.price, nest.item_img)"
            
						>


						 Order
						</a>

 
   </span>
    <!-- <span class="card__by"> <a
							href="javascript: void(0);"
							class="btn btn-primary btn-sm float-right"
              v-b-modal.modal-2
               @click ="getIdRecur(nest._id)"
						>


							 Set Recurring
						</a>

 
   </span>
  -->
 

  </div>
</article>  

  </section>
  <!-- <div class="spinner">
<b-spinner style="width: 3rem; height: 3rem;" label="Text Centered" ></b-spinner>
<div> -->
 
    <div class="d-flex justify-content-center mb-3" style="margin-top: 150px">
    <b-spinner  v-if="loader" style="width: 6rem; height: 6rem;" label="Loading..." type="grow" variant="primary"></b-spinner>
  </div>

<!-- Not finalised, graphic to be shown when users nests is empty  -->
  




</div>
</div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700');
@import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');



*{
  box-sizing: border-box;
}

body, html {
   font-family: 'Roboto Slab', serif;
    margin: 0;
  width: 100%;
height: 100%;
    padding: 0;
}

body {
  background-color: #D2DBDD;
  display: flex;
  display: -webkit-flex;
  -webkit-justify-content: center;
  -webkit-align-items: center;
  justify-content: center;
  align-items: center;
}


.row  {margin: 0 -5px;}
.row:after {
  content: "";
  display: table;
  clear: both;
}


.card__like {
    width: 18px;
}

.card__clock {
    width: 15px;
  vertical-align: middle;
    fill: #AD7D52;
}
.card__time {
    font-size: 12px;
    color: #AD7D52;
    vertical-align: middle;
    margin-left: 5px;
}

.state{
  font-family: ;
}

.card__clock-info {
    float: right;
}


.card__img {
  visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 200px;
  border-top-left-radius: 12px;
border-top-right-radius: 12px;
  
}

.card__info-hover {
    position: absolute;
    padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
}

.card__img--hover {
  transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
  position: absolute;
    height: 235px;
  border-top-left-radius: 12px;
border-top-right-radius: 12px;
top: 0;
  
}

.card {
     float: left;
      padding: 0;
      margin: 12px;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
 justify-self: space-around;
    width:28%;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
 
}
.card:hover {
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
    transform: scale(1.10, 1.10);
}

.card__info {
z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
   padding: 16px 24px 24px 24px;
}

.card__category {
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
  color: #868686;
}

.card__title {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: 'Roboto Slab', serif;
}

.card__by {
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
}

.card__author {
    font-weight: 600;
    text-decoration: none;
    color: #AD7D52;
}

.card:hover .card__img--hover {
    height: 100%;
    opacity: 0.3;
}

.card:hover .card__info {
    background-color: transparent;
    position: relative;
}

.card:hover .card__info-hover {
    opacity: 1;
}

.item_info{
    display: grid;
  grid-template-columns: 200px 180px;
 

}
.item_img{
 
}
.item_text{
  background-color:teal;
  color: white;
  opacity: 60%;
  font-size: large;
  padding-left:20%;
  padding-top: 15%;
  border-radius: 20%; 

  
  
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .card {
    width: 44%;
    display: block;
    margin-bottom: 20px;
  }

  .card__img {

    /* check this */
}

.fa-window-close{
  width: 7px;
  padding-left: 0px;
  outline:none
}

.card__img--hover {
  visibility: hidden;
  transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
  position: absolute;
    height: 235px;
  border-top-left-radius: 12px;
border-top-right-radius: 12px;
top: 0;
  
}

.card__img .img{
width: 150px;
height: 150px
    
    /* check this */
}

.card__img {
  visibility: visible;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 130px;
  border-top-left-radius: 12px;
border-top-right-radius: 12px;
margin-left: 30px;
margin-top: 10px;
  
}


.card__info {
 
}

.card__info h3{

}

.price1{
  font-size: 10px;
}

.state{
  font-size: 7.5px;

}

.fa-window-close{
  width: 7px;
  padding-left: 50px;
  outline:none
}

}





.btn{
	transition: all .5s ease;
	width: 70%;
	border-radius: 30px;
	color:#008080;
	font-weight: 700;
	background-color: #fff;
	border: 1px solid #008080;
	margin-top: 0.7em;
	margin-bottom: 0.7em;
}
.btn:hover, .btn:focus{
	background-color: #008080;
	color:#fff;
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












</style>


<script>
import axios from 'axios';
import StoreModal from '@src/router/views/pages/nests/modals/store_modal.vue';


export default {
  name: 'nests',
  components: {
      StoreModal
    },
  data() {
    return {
                 modalOpen: false,
               counter: 0,
                currentNestId: null,
         nests: [],
         user_store:[],
         deli_time: '',
         deli_addy: '',
         itemid: '',
         info_item: '',
        info_price: '',
        info_img: '',
        info_per: [],
        per: [], 
        qty: 1,
        del_item: '',
        del_per: '',
         del_item_id:null,
         loader: true       
}
  },

  methods: {
showModal() {
       if (this.user_store.length > 0){
         return this.$refs['my-modal'].show();
       }
       else {
         console.log('Necessties are full')
       }
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      },  
       
getIdOrder: async function(index) {
          this.itemid = index
                  
            },


getItemInfo: async function(item, per, price, img) {
          this.info_item = item,
          this.info_per = per,
          this.info_price = price;
          this.info_img = img;
          console.log(brand)
                  
            },


submitOrder:  async function() {
        const order = {
                    deli_time: this.deli_time,
                    deli_addy: this.deli_addy,
                    itemid: this.itemid,
                    user: this.$auth.user.email,
                    qty: this.qty
                 
                }
      const accessToken = await this.$auth.getTokenSilently();
      console.log(this.$auth.user.email + '   This is Usieres email')
       console.log(order)
      
      // Use Axios to make a call to the API
  await axios({
  method: 'post',
  url:"/api/order",
  headers: {
            Authorization: `Bearer ${accessToken}`
          },
  data: order,
 
});

    },


// RECURRING

getIdRecur: async function(index) {
          this.itemid = index
                  
            },

submitRecur:  async function() {
        const recur = {
            deli_time_weekly : this.deli_time_weekly, 
            deli_time_custom1 : this. deli_time_custom1,
            deli_time_custom2: this.deli_time_custom2,
            deli_time_custom3: this.deli_time_custom3,
            deli_time_custom4: this.deli_time_custom4,
            deli_addy1: this.deli_addy1,
            deli_addy_custom: this.deli_addy_custom,
            qty: this.qty,
            itemid: this.itemid
         

                }
      const accessToken = await this.$auth.getTokenSilently();
      console.log(this.$auth.user.email + '   This is Usieres email')
       console.log(recur)
      
      // Use Axios to make a call to the API
  await axios({
  method: 'post',
  url:"/api/recur",
  headers: {
            Authorization: `Bearer ${accessToken}`
          },
  data: recur,
 
});

    },
    
 toast(toaster, append = false) {
        this.counter++
        this.$bvToast.toast(`Ordered has been placed, view Pending`, {
          title: "Success",
          toaster: toaster,
          solid: true,
          appendToast: append
        })
      },


// Get the nest ID
 getIdNest: async function(id) {
          this.del_item_id = id
            console.log(this.del_item_id)      
            },

  
// Delete nest from database
deleteNest:  async function() {
        
      const accessToken = await this.$auth.getTokenSilently();
      
      // Use Axios to make a call to the API
  await axios({
  method: 'delete',
  url:`/api/nest/${this.del_item_id}`,
  headers: {
            Authorization: `Bearer ${accessToken}`
          },
 
});

    },

sendDelInfo: async function(item, per) {        
 this.del_item = item,
 this.del_per = per
 this.$forceUpdate();
 console.log(this.del_item, this.del_per)
    },

 refreshPage: async function() {        
 this.$forceUpdate();
    },


  },


async mounted() {
 
      const accessToken =  await this.$auth.getTokenSilently();
                
// getting necessities from the database              
            await axios({
                method: 'get',
                url:`/api/nest`,
                headers: {
                Authorization: `Bearer ${accessToken}`
                     },
              
}).then( res => {
     this.nests = res.data.nests;
      
          console.log(this.nests);
          	console.log(this.$auth.user.email);
})
	.catch( e => {
			console.log(e);
    }) ;

  this.showModal();
 
const user = this.$auth.user.email
// filtering the necessities for the current user
this.user_store = this.nests.filter(function(nest){
  if (nest.inputer === user )
  return true;
});

// set timeout to remove the loader component    
setTimeout(() => { this.loader = false }, 2000);
},



}
</script>




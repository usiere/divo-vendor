<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import NestCard1 from '@src/router/views/pages/nests/NestCard1'
import axios from "axios";

export default {
	page: {
		title: 'Nests',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: {
		VuePerfectScrollbar,
        Layout,
        NestCard1
    },
     data: function() {
            return {
                userid:  this.$auth.user.email,
                     divoid: "",
                    address: '',
                    district: '',
                    city: '',
                    phone1: '',
                    phone2: '',
                    email: '',
                    name: '',
                    user_main:[],
                    couts:[],
                    user_couts:[]
                  
            }
        },
       
   methods: {
    onSubmit:  async function() {
        const user = {
                    divoid: this.divoid,
                    address: this.address,
                    district: this.district,
                    city: this.city,
                    phone1: this.phone1,
                    phone2: this.phone2,
                    email: this.$auth.user.email,
                    name: this.$auth.user.name
                 
                }
      const accessToken = await this.$auth.getTokenSilently();
      console.log(this.$auth.user.email + '   This is Usieres email')
       console.log(user)
      
      // Use Axios to make a call to the API
  await axios({
  method: 'post',
  url:"/api/user",
  headers: {
            Authorization: `Bearer ${accessToken}`
          },
  data: user,
 
});

    },

showModal() {
       if (this.user_main === 'none'){
         return this.$refs['prof-upd'].show();
       }
       else {
         console.log('Profile exists')
       }
      },

  },
  

async mounted() {
 
      const accessToken =  await this.$auth.getTokenSilently();
                
              const userid = this.userid;
            await axios({
                method: 'get',
                url:`/api/user/${userid}`,
                headers: {
                Authorization: `Bearer ${accessToken}`
                     },
              
}).then( res => {
     this.user_main = res.data.user_main;
      
          console.log(this.user_main);
         
})
	.catch( e => {
			console.log(e);
        }),
        
  this.showModal();


  // Getting the cout orders 
            await axios({
                method: 'get',
                url:`/api/cout`,
                headers: {
                Authorization: `Bearer ${accessToken}`
                     },
              
}).then( res => {
     this.couts = res.data.couts;
      
          console.log(res.data.couts);
    
})
	.catch( e => {
			console.log(e);
    })


// filtering the couts for the current user
this.user_couts = this.couts.filter(function(cout){
  if (cout.inputer === userid )
  return true;
});

console.log("checking" + this.user_couts)


},




}
</script>

<template class="main-body">
	<Layout>
	<!-- Navbar-->
<header class="header">
    <nav class="navbar navbar-expand-lg navbar-light py-3">
     <h1>Edit Item</h1>
      <div class="mb-4">
            <a v-b-modal.past-orders hide-backdrop href="#" class="past btn btn-success ml-2">Save changes</a>
        </div>
    </nav>

</header>

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
          <h3 class="mt-3">Hey {{$auth.user.given_name}}</h3>
          <p class="text-muted mb-5">
            Seems you have not updated your profile information.
          </p>
           <router-link to="/store/new" class="btn btn-success ml-2" exact>Update Profile</router-link>
        </div>
      </div>
     
    </b-modal>

    
<b-modal id="past-orders" hide-footer title="Past Orders">
  <div class="past-orders"  v-if="couts && couts.length >0">
    <div v-for="(cout, index) in couts" v-bind:key="cout._id">
   <p class="cout"><i class="fas fa-shopping-cart"></i></i>  <strong> {{cout.deli_time}}</strong> <strong> |</strong> {{cout.item}} ({{cout.per}} ) <strong> |</strong> ₦{{cout.price * cout.qty}} <strong> |</strong> Qty: {{cout.qty}}</p>

</div>
</div>
  </b-modal>

        
<div class="container">
    <div class=" row py-5 mt-4 align-items-center">
        <!-- For Demo Purpose -->
        <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img class="img_main" width="250px" height="250px" src="https://divo-cat.s3-ap-southeast-1.amazonaws.com/fruits.jpg " />
              <div class="overlay">Edit picture</div>
            </br> </br> </br>

            <div class="side_pics">   
            <div class="img_side"><img  width="50px" height="50px" src="https://divo-cat.s3-ap-southeast-1.amazonaws.com/fruits.jpg " /></div> 
                    <div class="img_side"><img  width="50px" height="50px" src="https://divo-cat.s3-ap-southeast-1.amazonaws.com/fruits.jpg " /></div> 
                  <div class="img_side"><img  width="50px" height="50px" src="https://divo-cat.s3-ap-southeast-1.amazonaws.com/fruits.jpg " /></div> 
                
                 </div>
             <!-- <strong> <p>Account:</p> </strong> -->
            <h1>{{$auth.user.name}}</h1>
            <h4>{{$auth.user.email}}</h4>
          
        </div>

        

        <!-- Registeration Form -->
        <div class="col-md-7 col-lg-6 ml-auto">
           
                <div class="row">

   <strong> <h3>   Account details: <button class="btn btn-success ml-2"> Edit</button> </h3> </strong> </br></br>
    <strong> <h3>   Account details: <button class="btn btn-success ml-2"> Edit</button> </h3> </strong> </br>
    <strong> <h3>   Account details: <button class="btn btn-success ml-2"> Edit</button> </h3> </strong>
   
   
    </br> </br>            

                  

                   

                    <!-- Social Login -->
                   

                    <!-- Already Registered -->
                   
                </div>
          
        </div>
    </div>
</div>

 <b-modal id="modal-1" title="Update Account Information" hide-footer >
 <div>
   <form v-on:submit.prevent="onSubmit">
    <b-form-input v-model="divoid" type="text" class="form-control item" id="divoid" name="divoid" placeholder="Divo ID (if issued)"></b-form-input>
     <b-form-input  v-model="address" type="text" class="form-control item" id="address" name="address" placeholder="Address*"></b-form-input>
      <b-form-input v-model="district" type="text" class="form-control item" id="district" name="district" placeholder="District* "></b-form-input>
       <b-form-input v-model="city" type="text" class="form-control item" id="city" name="city" placeholder="City"></b-form-input>

        <b-form-input v-model="phone1" type="text" class="form-control item" id="phone1" name="phone1" placeholder="Phone Number1* "></b-form-input>
     <b-form-input  v-model="phone2" type="text" class="form-control item" id="phone2" name="phone2" placeholder="Phone Number2* "></b-form-input>
         <b-button type="submit" @click="$bvModal.hide('modal-1')" variant="primary">Submit</b-button>
        
        </form>
  </div>
  </b-modal>


    <b-modal ref="prof-upd" hide-footer title="Empty Store" centered>
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

    
	</Layout>
</template>






<style scoped>


.border-md {
    border-width: 2px;
}

.btn-facebook {
    background: #405D9D;
    border: none;
}

.btn-facebook:hover, .btn-facebook:focus {
    background: #314879;
}

.btn-twitter {
    background: #42AEEC;
    border: none;
}

.btn-twitter:hover, .btn-twitter:focus {
    background: #1799e4;
}



/*
*
* ==========================================
* FOR DEMO PURPOSES
* ==========================================
*
*/

body {
    
}

.form-control:not(select) {
    padding: 1.5rem 0.5rem;
}

select.form-control {
    height: 52px;
    padding-left: 0.5rem;
}

.form-control::placeholder {
    color: #ccc;
    font-weight: bold;
    font-size: 0.9rem;
}
.form-control:focus {
    box-shadow: none;
}


.cardtext{
     color: #ccc;
    font-weight: bold;
    font-size: 0.9rem;
    font-size: 30px;
}




.registration-form{
	padding: 10px 0;
}

.registration-form form{
    background-color: #fff;
    max-width: 600px;
    margin: auto;
    padding: 50px 70px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .form-icon{
	text-align: center;
    
    color: white;
    width: 50px;
    height: 50px;
    margin: auto;
    margin-bottom: 50px;
    line-height: 100px;
}

.registration-form .item{
	border-radius: 20px;
    margin-bottom: 25px;
    padding: 10px 20px;
}

.registration-form .create-account{
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    background-color: #5791ff;
    border: none;
    color: white;
    margin-top: 20px;
}

.registration-form .social-media{
    max-width: 600px;
    background-color: #fff;
    margin: auto;
    padding: 35px 0;
    text-align: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    color: #9fadca;
    border-top: 1px solid #dee9ff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .social-icons{
    margin-top: 30px;
    margin-bottom: 16px;
}

.registration-form .social-icons a{
    font-size: 23px;
    margin: 0 3px;
    color: green;
    border: 1px solid;
    border-radius: 50%;
    width: 45px;
    display: inline-block;
    height: 45px;
    text-align: center;
    background-color: #fff;
    line-height: 45px;
}

.registration-form .social-icons a:hover{
    text-decoration: none;
    opacity: 0.6;
}

.mb-4{
    padding-left: 400px;
}

.past-orders{
  height: 200px;
  overflow: scroll
  
}
.fa-user{
  font-size: 250px;
  color: green;
 
}

.cout{
  border-left: 1px solid green;
  border-right: 1px solid green;
  
}

/* overlay to edit main picture */

.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: .5s ease;
  opacity:0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}

.img_main:hover .overlay {
  opacity: 1;
}

@media (max-width: 576px) {
    .registration-form form{
        padding: 50px 20px;
    }

    .registration-form .form-icon{
        width: 70px;
        height: 70px;
        font-size: 30px;
        line-height: 70px;
    }
}

/* New Profile Card */
/* If you like this, please check my blog at codedgar.com.ve */
@import url('https://fonts.googleapis.com/css?family=Work+Sans');

body{
    background-color: white;
}
.card{
  background:black;  border-radius:14px; max-width: 300px; display:block; margin:auto;
  padding:60px; padding-left:20px; padding-right:20px;box-shadow: 2px 10px 40px black; z-index:99;
}

.logo-card{max-width:50px; margin-bottom:15px; margin-top: -19px;}

label{display:flex; font-size:10px; color:white; opacity:.4;}

input{font-family: 'Work Sans', sans-serif;background:transparent; border:none; border-bottom:1px solid transparent; color:#dbdce0; transition: border-bottom .4s;}
input:focus{border-bottom:1px solid #1abc9c; outline:none;}

.cardnumber{display:block; font-size:20px; margin-bottom:8px; }

.name{display:block; font-size:15px; max-width: 200px; float:left; margin-bottom:15px;}

.toleft{float:left;}
.ccv{width:50px; margin-top:-5px; font-size:15px;}

.receipt{background: #dbdce0; border-radius:4px; padding:5%; padding-top:200px; max-width:600px; display:block; margin:auto; margin-top:-180px; z-index:-999; position:relative;}

.col{width:50%; float:left;}
.bought-item{background:#ffffff00; padding:2px;}
.bought-items{margin-top:-3px;}

.cost{color:black;}
.seller{color: black;}
.description{font-size: 13px;}
.price{font-size:12px;}
.comprobe{text-align:center;}
.proceed{position:absolute; transform:translate(300px, 10px); width:50px; height:50px; border-radius:50%; background:#1abc9c; border:none;color:white; transition: box-shadow .2s, transform .4s; cursor:pointer;}
.proceed:active{outline:none; }
.proceed:focus{outline:none;box-shadow: inset 0px 0px 5px white;}
.sendicon{filter:invert(100%); padding-top:2px;}

/* 
scroll bar test */

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

@media (max-width: 600px){
  .proceed{transform:translate(250px, 10px);}
  .col{display:block; margin:auto; width:100%; text-align:center;}

  .mb-4{
    padding-left: 40px;
}

.past,.upd{
  margin: 20px
}

.space1{
   visibility: hidden;
   /* check this */
}

.fa-user{
  font-size: 50px;
  color: green;
  padding-left: 100px;
 
}

.side-pics{
    display: grid;
    grid-template-columns: 30% 30% 30%;
}

.img_side{
    margin: 30%;
    padding: 30%
}
}



</style>


<template>
<div>
   <b-modal id="bv-modal-example" centered hide-footer>
    <template v-slot:modal-title>
Delete Order  
    </template>
    <div class="d-block text-center">
      <h3>Are you sure you want to remove <h4>'{{order_item}} ({{'per '+ order_per}})' </h4></h3>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example'),  deletePending()">Yes</b-button>  <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">No</b-button>
  </b-modal>

  <b-modal id="modal-checkout" title="Checkout " hide-footer>
             <p class="my-4">"Upon Checkout, you agree to all the Terms and Conditions as stated. Please note that only <strong>Pay on Delivery</strong> is available for this version. Review all items in the Pending section before clicking on Checkout"
</p>  
				</span>
           <div>
           
             <div class="breakdown">
                 <h5><strong>Fees: </strong></h5>
             <h6>- Orders     :      <strong> ₦{{orderSum}}</strong></h6>
              <h6>- Divo fee     :      <strong> ₦500</strong></h6>
               <h6>- Collation     :       <strong>₦{{totalFee}}</strong></h6>   <total-fig><div class="total2">Total : <strong><u>₦{{totalSum}}</u></strong></div></total-fig>
               </div> </br> 



     </div>
  
    <router-link to="/success"  class="btn btn-success ml-2"  @click.native="sendIdCout(user_id_cout)">Checkout</router-link>
  </b-modal>


    <b-modal id="t-c" hide-footer title="Terms and Conditions" centered>  
      <strong>
      <ol> 
<li>  For orders made in the Beta version, only pay on delivery is available. All payments should be made 
upon delivery via Cash or Transfer.</li>
<li> Orders after checkout cannot be reverted, for queries call 09026212016</li>
<li>  Delivery address changed by the customer after checkout will not effect on the Orders</li>

    </ol>
    </strong>
    </b-modal>
 

     <b-modal id="deli_info" hide-footer title="Delivery Information" centered>   
<b-list-group>
  <b-list-group-item variant="primary"> All orders are made in the say before 3pm will be set to be delivered that day from 5:15pm to 6:15pm in Beta version</b-list-group-item>
</b-list-group>
    </b-modal>   

 <div class="mb-4">
            <a v-b-modal.modal-checkout hide-backdrop href="#" class="past btn btn-success ml-2">Checkout <i class="fas fa-shopping-cart"></i></a>
            <a v-b-modal.t-c hide-backdrop href="#" class="past btn btn-success ml-2">T & C's</i></a>
             <a v-b-modal.deli_info hide-backdrop href="#" class="upd btn btn-success ml-2">Delivery Info <i class="fas fa-truck-loading"></i></a>
        </div>
<div class="container"> 
  <div class="pending" >
     <div class="calendar_header">
      <h1 class = "header_title">Pending Orders</h1>
      
      <div >
            <button class="btn btn-success ml-2" exact>Total:</br> <strong class="total">₦{{orderSum}}</strong></button>
           <div class= "search">
    <form action="">
  <input type="search" v-model="search" >
  <i class="fa fa-search"></i>
</form>

  </div>
        </div>
    
      
    </div>
   
    <div class="list"  v-if="orders && orders.length >0">
    <div class="calendar_plan"  v-for="(order, index) in filteredList" v-bind:key="order._id">
      <div class="cl_plan">
         <div cl_text>
           <div class="cl_copy">Order date: {{order.date}}</div>
        <strong><div class="cl_title">{{order.item}} ({{order.per}})</div></strong>
        <strong><div class="cl_title">Total Price: ₦{{order.price * order.qty}} Qty:{{order.qty}} </div></strong>
        <div class="cl_title">Delivery date : {{order.deli_time}}</div>
        
        </div>
        <div class="check">
          <div class="remove">
           <button class="btn btn-success ml-2"  @click="$bvModal.show('bv-modal-example'), getIdPending(order._id), getOrderInfo(order.item, order.per)">Remove</button>
           </div>
            <img class="img" v-bind:src=" order.item_img" width="200" height="200" /> 
        </div>
        
       
    

      </div>
    </div>
  
     
    <b-spinner label="Loading..."></b-spinner>
   
   </div>
  </div>

  <div class="delivered">
    <div class="calendar_header">
     
      
    </div>
    <div class="t">
    <div class="calendar_events">
    
     <section class="button-style">
    <div>
        <div class="sidebtn">
            <div class=""> <a href="#" v-b-modal.modal-checkout class="highlight-button btnn btnn-large button xs-margin-bottom-five" data-abc="true"><i class="fa fa-comment"></i>Checkout </br> <i class="fas fa-shopping-cart"></i>
</a> </div>
        </div>
    </div></br>
    <div >
        <div class="sidebtn" >
             <div class=""> <a href="#" v-b-modal.t-c class="highlight-button btnn btnn-large button xs-margin-bottom-five" data-abc="true"><i class="fa fa-comment"></i>T & C </br> <i class="fas fa-question"></i></a> </div>
        </div>
    </div></br>
    <div>
        <div class="sidebtn" >
             <div class=""> <a href="#" v-b-modal.deli_info class="highlight-button btnn btnn-large button xs-margin-bottom-five" data-abc="true"><i class="fa fa-comment"></i>Delivery Information </br> <i class="fas fa-truck-loading"></i></a> </div>
        </div>
    </div>
</section>
     
  
    </div>
  </div>
  
  </div>
</div>
</div>
</template>

<style scoped>
$off_white:#fafafa;
$light_grey:#A39D9E;
*{
  box-sizing:border-box;
}

body{
  background-color: $off_white;
}

.container{
  margin:10px auto;
  width:1000px;
  padding-top: 30px;
    display: grid;
    grid-template-columns: 50% 50% ;
}

.light{
  background-color: #fff;
}
.dark{
  margin-left: 65px;
}

.pending{
  width:520px;
  box-shadow: 0px 0px 35px -16px rgba(0,0,0,0.75);
  font-family: 'Roboto', sans-serif;
  padding: 20px 30px;
  color:#363b41;
  display: inline-block;

   background-color: #fff;
}



.delivered{
  width:350px;
  box-shadow: 0px 0px 35px -16px rgba(0,0,0,0.75);
  font-family: 'Roboto', sans-serif;
   margin-left:  50px;
  color:#363b41;
  display: inline-block;
  background-color: transparent;


}


.list{

  height: 520px;
  overflow: scroll;
}


.calendar_header{
  border-bottom: 2px solid rgba(0, 0, 0, 0.08);
}

.header_copy{
  color:$light_grey;
  font-size:20px;
}
.calendar_plan{
  margin:20px 0 40px;
}
.cl_plan{
  width:100%;
  height: 150px;
  background-color:#fff;
  box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75);
  padding:30px;
  color:#fff;
  display: grid;
  grid-template-columns: 300px 100px;
}
.cl_title{
   margin: 0px 0;
   color: black;
   
}
.cl_copy{
  font-size: 15px;
  margin: 0px 0;
  display: inline-block;
  margin: 0px 0;
   color: black;
}

.cl_add{
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius:50%;
  background-color: #fff;
  cursor: pointer;
  margin:0 0 0 300px;
  color:#c2c2c2;
  padding: 11px 13px;
}

.check{
  border-radius:50%;
}

.check img {
   width: 100%;
    border-radius:50%;
     width: 70px;
  height: 70px;
}


.calendar_events{
  color:$light_grey;
}
.ce_title{
  font-size:14px;
}

.event_item{
  margin: 18px 0;
  padding:5px;
  cursor: pointer;
  &:hover{
    background-image: linear-gradient(-222deg, #FF8494, #ffa9b7);
    box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75);
    .ei_Dot{
      background-color: #fff;
    }
    .ei_Copy,.ei_Title{
      color:#fff;
    }
  }
}

.ei_Dot,.ei_Title{
  display:inline-block;
}

.ei_Dot{
  border-radius:50%;
  width:10px;
  height: 10px;
  background-color: $light_grey;
  box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75);
}
.dot_active{
  background-color: #FF8494;
}

.ei_Title{
  margin-left:10px;
  color:#363b41;
}

.ei_Copy{
  font-size:12px;
  margin-left:27px;
}

.dark{
  background-image: linear-gradient(-222deg, #646464, #454545);
  color:#fff;
  .header_title,.ei_Title,.ce_title{
    color:#fff;
  }
  
}

.mb-4{
  padding-left: 300px;
}

/* Css for new buttons */
.btnn {
    display: inline-block;
    margin-right: 20px;
    letter-spacing: 2px;
    border: 1px solid transparent
}

.btnn-round {
    border-radius: 4px !important
}

.btnn i {
    margin-right: 5px
}

.btnn.btnn-large i {
    font-size: 24px
}

.button {
    margin-top: 0;
    margin-bottom: 0
}

.btnn.btnn-large {
    font-size: 18px;
    padding: 50px 35px
}

.btnn.btnn-medium {
    font-size: 14px;
    padding: 10px 22px
}

.btnn.btnn-small {
    font-size: 11px;
    padding: 2px 14px;
    letter-spacing: 1px
}

.btnn.btnn-very-small {
    font-size: 9px;
    padding: 1px 12px;
    letter-spacing: 1px
}

.highlight-button {
    border: 2px solid #000;
    display: inline-block;
    padding: 8px 20px 9px;
    font-size: 12px;
    color: green;
    background-color: transparent
}

.highlight-button:hover {
    background-color: green;
    border: 2px solid #000;
    color: #fff
}

.highlight-button i {
    color: #000
}

.highlight-button:hover i {
    color: #fff
}

.search{
  padding-left: 180px
}

.total{
  font-size: 23px;
}

.remove{
  padding-right: 20px
  
}

/* Form search */
form{
    position: relative;
    top: 50%;
    left: 75%;
    transform: translate(-50%,-50%);
    transition: all 1s;
    width: 50px;
    height: 50px;
    background: green;
    box-sizing: border-box;
    border-radius: 25px;
    border: 4px solid white;
    padding: 5px;
}

input{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;;
    height: 42.5px;
    line-height: 30px;
    outline: 0;
    border: 0;
    display: none;
    font-size: 1em;
    border-radius: 20px;
    padding: 0 20px;
}

.fa{
    box-sizing: border-box;
    padding: 10px;
    width: 42.5px;
    height: 42.5px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    color: #07051a;
    text-align: center;
    font-size: 1.2em;
    transition: all 1s;
}

form:hover{
    width: 200px;
    cursor: pointer;
}

form:hover input{
    display: block;
}

form:hover .fa{
    background: #07051a;
    color: white;
}

.sidebtn{
  padding-top: 30px;
  padding-left: 20px
}

.total2{
  padding-left: 200px
}

.breakdown{
   padding-left: 10px;
}

  .mb-4{
    visibility: hidden;
}

.my-4{
  background-color: forestgreen;
  opacity: 40%;
  color: white;
  padding: 20px;
}

total-fig{
  font-weight: bold;
  font-size: 20px;
}
@media (max-width: 600px){
 .pending{
  width:430px;
}

.remove{
  padding-right: 5px
  
}
/* check this */


  .mb-4{
    padding-left: 40px;
    margin: 20px;
    visibility: visible;
}

.cl_plan{
  width:100%;
  height: 150px;
  background-color:#fff;
  box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75);
  padding:30px;
  color:#fff;
  display: grid;
  grid-template-columns: 200px 200px;
}

.delivered{
 visibility: hidden;

}
}




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
</style>


<script>
import axios from 'axios';



export default {
  name: 'nests',
  
  data() {
    return {
         search: '',
         orders: [],
         orderSum: 0,
         totalSum:0,
         totalFee:0,
         del_item_id:null,
         user_id_cout: this.$auth.user.email,
         order_item:'',
         order_per: '',
         user_orders: [],

   
        
}
  },

 

async mounted() {
 
      const accessToken =  await this.$auth.getTokenSilently();
                
              
            await axios({
                method: 'get',
                url:`/api/order`,
                headers: {
                Authorization: `Bearer ${accessToken}`
                     },
              
}).then( res => {
     this.orders = res.data.orders;
      
          console.log(this.orders);
    
})
	.catch( e => {
			console.log(e);
    }),


  
  
  // Calculating the total sum of Orders (price)
  this.orderSum = this.orders.reduce(function(total, order){
    return Math.round( +total + (+order.price * +order.qty ) ) ;
  },0 );
  console.log(this.orderSum)  ;
  
  // Calculating total fee
   this.totalFee = Math.round(this.orderSum * 0.015 );

// Calculating total sum plus delivery and commission
   this.totalSum = (this.orderSum + this.totalFee + 500)

const user = this.$auth.user.email
// filtering the pending orders for the current user
this.user_orders = this.orders.filter(function(order){
  if (order.inputer === user )
  return true;
});

console.log(this.user_orders)



},

methods:{
  getIdPending: async function(id) {
          this.del_item_id = id
            console.log(this.del_item_id)      
            },

  deletePending:  async function() {
        
      const accessToken = await this.$auth.getTokenSilently();
      
      // Use Axios to make a call to the API
  await axios({
  method: 'delete',
  url:`/api/order/${this.del_item_id}`,
  headers: {
            Authorization: `Bearer ${accessToken}`
          },
 
});

    },

 sendIdCout:  async function(id) {
   console.log('sent id ')
        
      const accessToken = await this.$auth.getTokenSilently();
      
      // Use Axios to make a call to the API
  await axios({
  method: 'post',
  url:`/api/order/${id}`,
  headers: {
            Authorization: `Bearer ${accessToken}`
          },
 
});

    },

getOrderInfo: async function(item, per) {
        this.order_item = item,
        this.order_per = per
    },
},


computed: {
 filteredList() {
  return this.user_orders.filter(order => {
     return (order.item || '').toLowerCase().indexOf((this.search || '').toLowerCase()) > -1
  })
}}


}
</script>






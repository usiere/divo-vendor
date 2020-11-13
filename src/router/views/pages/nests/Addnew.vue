<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import Category from '@src/router/views/pages/nests/nests_components/category'


export default {
	page: {
		title: 'Nests',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: {
		VuePerfectScrollbar,
        Layout,
        Category
	},

}
</script>

<template>
	<Layout>

	<div class="d-flex flex-column">
		<div class= "heading">
        <router-link to="/store/new" class="fas fa-arrow-left"></router-link >  
 
 <div class="sall"><router-link to='/store/new/Katampe/all_items' class=" btn btn-success ml-2">View all <i class="fas fa-search"></i></router-link> </div>
 
	    </div>
		 
		

				<Category />
		
       

      

    </div>
    
    
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

.fa-arrow-left{
    font-size: 30px;
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
    margin-left: 700px
}

@media screen and (max-width: 600px) {
.sall{
    margin-left: 300px;
    margin-bottom: 10px
}
}

@keyframes a-ltr-after{
    0% {transform: translateX(-100%)}
    100% {transform: translateX(101%)}
}

@keyframes a-ltr-before{
    0% {transform: translateX(0)}
    100% {transform: translateX(200%)}
}
</style>


<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PendCard from '@src/router/views/pages/nests/nests_components/pending-card'


export default {
	 
	page: {
		title: 'Nests',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: {
		VuePerfectScrollbar,
        Layout,
        PendCard
	},

	

}
</script>

<template>
	<Layout>
	<div class="d-flex flex-column">

				<PendCard/>
	
				
		
       

      

    </div>
    
    
	</Layout>
</template>

<style scoped>

.heading{
	padding-left: 35%;
	padding-top: 5%;

}

.mb-4 {
	padding-left: 700px;
}

</style>



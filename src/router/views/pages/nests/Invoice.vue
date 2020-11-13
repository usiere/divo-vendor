<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import Invoicecard from '@src/router/views/pages/nests/nests_components/invoice-card1.vue'


export default {
	page: {
		title: 'Nests',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: {
		VuePerfectScrollbar,
        Layout,
        Invoicecard
	},

}
</script>

<template>
	<Layout>
        
				<Invoicecard/>
	<div class="d-flex flex-column">
        <h1>Necessities</h1>

        <div class="mb-4">
            <router-link to="/nests/new" class="btn btn-success ml-2" exact>Create Necessities</router-link>
        </div>
    

	      

    </div>
    
    
	</Layout>
</template>

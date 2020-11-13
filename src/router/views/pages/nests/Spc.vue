<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import Toolbar from './categories/invent_components/topbar'
import LeftbarList from './categories/invent_components/leftbar'
import InventSpc from '@src/router/views/pages/nests/nests_components/invent-spc'
 import axios from 'axios';



/**
 * Email-inbox component
 */
export default {
  page: {
    title: 'Inbox',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { VuePerfectScrollbar, Layout, PageHeader, Toolbar, LeftbarList,  InventSpc },
  data() {
    return {
    
    }
  },



  methods: {
    remove() {
      this.isVisible = false
    },
  },


}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      
      <div class="col-12">
       
          <!-- Left sidebar -->
       
          <!-- End Left sidebar -->

          <!-- start right sidebar -->
          <div class="inbox-rightbar">
         
<div >
            <div class="mt-2">
               



            	<InventSpc />

            </div>
            </div>
          </div>
      
      </div>
    </div>
  </Layout>
</template>


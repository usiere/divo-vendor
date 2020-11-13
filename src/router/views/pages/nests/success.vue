<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import Toolbar from './categories/invent_components/topbar'
import LeftbarList from './categories/invent_components/leftbar'
 import axios from 'axios';



/**
 * Email-inbox component
 */
export default {
  page: {
    title: 'Order Success',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { VuePerfectScrollbar, Layout, PageHeader, Toolbar, LeftbarList},
  data() {
    return {
    
    }
  },


}
</script>

<template>
  <Layout>
  <div class="account-pages my-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-5 col-8">
          <div class="text-center">
            <div class="success"> 
              <i class="far fa-check-circle"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center">
          <h3 class="mt-3">Success!!!</h3>
          <p class="text-muted mb-5">
            Your items will be delivered at the set time</br>
            
         
          </p>
          <!-- <router-link to="/" class="btn btn-lg btn-primary mt-4"
            >Go to store</router-link
          > -->
        </div>
      </div>
    </div>
    <!-- end container -->
  </div>
  <!-- end account-pages -->


  </Layout>
</template>

<style scoped>
.success{
 font-size: 250px;
  color: green
}

</style>


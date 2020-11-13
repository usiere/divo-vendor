<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import NestCard1 from './NestCard1'


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

}
</script>

<template>
	<Layout>
	<div class="d-flex flex-column">
        <h1>Necessities</h1>

        <div class="mb-4">
            <router-link to="/nests/new" class="btn btn-success ml-2" exact>Create Necessities</router-link>
        </div>
    
<div class="col-md-6 col-xl-3">
				<NestCard1/>
			</div>
				
		
        <div v-if="nests && nests.length > 0" class="d-flex flex-wrap justify-content-start">

            <div v-for="nest in nests" v-bind:key="nest._id" class="card mb-2 ml-2 text-white bg-dark" style="width: 18rem;">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                          <h5 class="card-title">{{ nest.category }}</h5>
                        <h5 class="card-title">{{ nest.item }}</h5>
                        <h5 class="card-title">{{ nest.brand }}</h5>
                        <h5 class="card-title">{{ nest.brandpic }}</h5>
                        <h5 class="card-title">{{ nest.price }}</h5>
                        <h5 class="card-title">{{ nest.size }}</h5>
                        <h5 class="card-title">{{ nest.qty }}</h5>
                        <h5 class="card-title">{{ nest.itempic }}</h5>
                        <h5 class="card-title">{{ nest.settime }}</h5>
                        <span v-bind:class="{ late: nestIsLate(nest.dueDate) && !nest.completed}" class="small">{{ nest.dueDate
                            | date }}</span>
                    </div>

                    <h6 class="card-subtitle mb-2 text-muted">
                        Created by {{ nest.buyer.username }}
                    </h6>

                    <p class="card-text">{{ nest.body }}</p>

                    <div v-if="nest.buyer._id === $store.state.userId" class="form-group form-check">
                        <input type="checkbox" class="form-check-input" :disabled="nest.completed" v-model="nest.completed" v-on:click="markAsCompleted(nest)"
                        />
                        <label for="form-check-label">Completed</label>
                    </div>

                    <div v-if="nest.buyer._id === $store.state.userId" class="d-flex justify-content-between">
                        <router-link type="button" tag="button" class="card-link btn btn-primary" :to="{ name: 'nests-edit', params: { id: nest._id } }"
                            exact>Edit</router-link>
                        <a v-on:click.prevent="currentNestId = nest._id" class="card-link btn btn-danger" href="#" v-b-modal.modal1>Delete</a>
                    </div>
                </div>
            </div>

            <div>
                <b-modal id="modal1" ref="modal" centered title="Delete Confirmation">
                    <p class="my-4">Are you sure you would like to delete this necessity?</p>
                    <div slot="modal-footer" class="w-100 text-right">
                        <b-btn slot="md" class="mr-1" variant="danger" @click="deleteNest">Delete</b-btn>
                        <b-btn slot="md" variant="secondary" @click="cancelModal">Cancel</b-btn>
                    </div>
                </b-modal>
            </div>
        </div>

        <div v-if="nests && nests.length === 0" class="ml-2">
            <div class="alert alert-info">No necessity found.</div>
        </div>

    </div>
    
    
	</Layout>
</template>

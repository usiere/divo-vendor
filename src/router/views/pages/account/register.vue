<script>
import Layout from '@layouts/default'
import { authMethods } from '@state/helpers'
import appConfig from '@src/app.config'

/**
 * Register component
 */
export default {
	page: {
		title: 'Register',
		meta: [{ name: 'description', content: `Register to ${appConfig.title}` }],
	},
	components: { Layout },
	data() {
		return {
			fullname: '',
			email: '',
			password: '',
			regError: null,
			tryingToRegister: false,
			isRegisterError: false,
		}
	},
	computed: {},
	methods: {
		...authMethods,
		// Try to register the user in with the email, fullname
		// and password they provided.
		tryToRegisterIn() {
			this.tryingToRegister = true
			// Reset the regError if it existed.
			this.regError = null
			return this.register({
				fullname: this.fullname,
				email: this.email,
				password: this.password,
			})
				.then((token) => {
					this.tryingToRegister = false
					this.isRegisterError = false
					// Redirect to the originally requested page, or to the confirm-account page
					this.$router.push(
						this.$route.query.redirectFrom || { name: 'confirm-account' }
					)
				})
				.catch((error) => {
					this.tryingToRegister = false
					this.regError = error.response ? error.response.data.message : ''
					this.isRegisterError = true
				})
		},
	},
}
</script>

<template>
	<Layout>
		<div class="account-pages my-5">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-10">
						<div class="card">
							<div class="card-body p-0">
								<div class="row">
									<div class="col-lg-6 p-5">
										<div class="mx-auto mb-5">
											<a href="/">
												<img src="@assets/images/logo.png" alt height="24" />
												<h3 class="d-inline align-middle ml-1 text-logo"
													>Shreyu</h3
												>
											</a>
										</div>

										<h6 class="h5 mb-0 mt-4">Create your account</h6>
										<p class="text-muted mt-0 mb-4"
											>Create a free account and start using Shreyu</p
										>

									<b-form
											class="authentication-form"
											@submit.prevent="tryToRegisterIn"
										>

										
											<div class="form-group">
												<div class="input-group input-group-merge">
													<div class="input-group-prepend">
														<span class="input-group-text">
															<feather
																type="mail"
																class="align-middle icon-dual"
															></feather>
														</span>
													</div>
													<b-form-input
														id="fullname"
														v-model="fullname"
														type="text"
														required
														placeholder="Enter fullname"
													></b-form-input>
												</div>
											</div>
											<div class="form-group">
												<div class="input-group input-group-merge">
													<div class="input-group-prepend">
														<span class="input-group-text">
															<feather
																type="mail"
																class="align-middle icon-dual"
															></feather>
														</span>
													</div>
													<b-form-input
														id="email"
														v-model="email"
														type="text"
														required
														placeholder="Enter username"
													></b-form-input>
												</div>
											</div>
											<div class="form-group mt-4">
												<label class="form-control-label">Password</label>
												<router-link
													to="forget-password"
													class="float-right text-muted text-unline-dashed ml-1"
													>Forgot your password?</router-link
												>
												<div class="input-group input-group-merge">
													<div class="input-group-prepend">
														<span class="input-group-text">
															<feather
																type="lock"
																class="align-middle icon-dual"
															></feather>
														</span>
													</div>
													<b-form-input
														id="password"
														v-model="password"
														type="password"
														required
														placeholder="Enter your password"
													></b-form-input>
												</div>
											</div>
											<div class="form-group mb-4">
												<div class="custom-control custom-checkbox">
													<input
														id="checkbox-signin"
														type="checkbox"
														class="custom-control-input"
														checked
													/>
													<label
														class="custom-control-label"
														for="checkbox-signin"
													>
														Remember me
													</label>
												</div>
											</div>
											<b-form-group id="button-group" class="mt-4 mb-1">
												<b-button
													type="submit"
													variant="primary"
													class="btn-block"
													>Register</b-button
												>
											</b-form-group>
										</b-form>
									</div>

									<div class="col-lg-6 d-none d-md-inline-block">
										<div class="auth-page-sidebar">
											<div class="overlay"></div>
											<div class="auth-user-testimonial">
												<p class="font-size-24 font-weight-bold text-white mb-1"
													>I simply love it!</p
												>
												<p class="lead"
													>"It's a elegent templete. I love it very much!"</p
												>
												<p>- Admin User</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- end card-body -->
						</div>
						<!-- end card -->

						<div class="row mt-3">
							<div class="col-12 text-center">
								<p class="text-muted">
									Already have account?
									<router-link
										tag="a"
										to="/login"
										class="text-primary font-weight-bold ml-1"
										>Log In</router-link
									>
								</p>
							</div>
							<!-- end col -->
						</div>
						<!-- end row -->
					</div>
					<!-- end col -->
				</div>
				<!-- end row -->
			</div>
			<!-- end container -->
		</div>
	</Layout>
</template>

<style lang="scss" module></style>

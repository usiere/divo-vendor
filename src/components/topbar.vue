<script>

import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
	components: {
		VuePerfectScrollbar,
	},
	props: {
		user: {
			type: Object,
			required: false,
			default: () => ({}),
		},
		isMenuOpened: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {}
	},
	methods: {
		toggleMenu() {
			this.$parent.toggleMenu()
		},
		toggleRightSidebar() {
			this.$parent.toggleRightSidebar()
		},
	},
}
</script>

<template>
	<!-- Topbar Start -->
	<div class="navbar navbar-expand flex-column flex-md-row navbar-custom">
		<div class="container-fluid">
			<!-- LOGO -->
			<a href="/" class="navbar-brand mr-0 mr-md-2 logo">
				<span class="logo-lg">
					<img src="https://divo-logo.s3-ap-southeast-1.amazonaws.com/logo.png" width="125" height="125" />
					<span class="d-inline h5 ml-2 text-logo"></span>
				</span>
				<span class="logo-sm">
					<img src="https://divo-logo.s3-ap-southeast-1.amazonaws.com/logo.png" alt height="24" />
				</span>
			</a>

			<ul
				class="navbar-nav bd-navbar-nav flex-row list-unstyled menu-left mb-0"
			>
				
			</ul>

			<ul
				class="navbar-nav flex-row ml-auto d-flex list-unstyled topnav-menu float-right mb-0"
			>
				
				<div class="mob_logo">
				<img src="https://divo-logo.s3-ap-southeast-1.amazonaws.com/logo.png" width="125" height="125" class="mob_logo"/>
                </div>
			
				<b-nav-item-dropdown
					id="bell-notification"
					right
					variant="white"
					class="notification-list"
					title="8 new unread notifications"
					menu-class="dropdown-lg"
				>
					<template v-slot:button-content>
					 <i class="fas fa-user"></i>
					</template>
					<b-tooltip target="bell-notification" placement="left"
						>Your Account</b-tooltip
					>
					<!-- item-->
					<b-dropdown-text class="noti-title border-bottom pb-2" tag="div">
						<h5 class="m-0 font-size-16">
						
							Usiere Akpabio
						</h5>
					</b-dropdown-text>

						<b-dropdown-text
							href="javascript:void(0);"
							class="notify-item border-bottom"
						>
							<div class="notify-icon bg-primary">
								<i class="uil uil-user-plus"></i>
							</div>
							<router-link to="/account"  class="notify-details">
								My Account.
								
							</router-link>
						</b-dropdown-text>

				
					<!-- All-->
					<b-dropdown-text
						href="javascript:void(0);"
						class="text-center text-primary notify-item notify-all border-top"
					>
						Logout
						<i class="fi-arrow-right"></i>
					</b-dropdown-text>
				</b-nav-item-dropdown>

				<!-- <li
					id="setting-tooltip"
					class="dropdown notification-list"
					title="Settings"
				>
					<a
						href="javascript:void(0);"
						class="nav-link right-bar-toggle toggle-right"
						@click="toggleRightSidebar"
					>
						<feather type="user" class="toggle-right"></feather>
					</a>
					<b-tooltip target="setting-tooltip" placement="left"
						>Settings</b-tooltip
					>
				</li> -->

			
			</ul>
		</div>
	</div>
	<!-- end Topbar -->
</template>

<style lang="scss">
.noti-scroll {
	height: 220px;
}
.ps > .ps__scrollbar-y-rail {
	width: 8px !important;
	background-color: transparent !important;
}
.ps > .ps__scrollbar-y-rail > .ps__scrollbar-y,
.ps.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail > .ps__scrollbar-y,
.ps > .ps__scrollbar-y-rail:active > .ps__scrollbar-y,
.ps > .ps__scrollbar-y-rail:hover > .ps__scrollbar-y {
	width: 6px !important;
}
.button-menu-mobile {
	outline: none !important;
}
</style>

<style scoped>
.mob_logo{
margin-right: 60px;
}


</style>

<template>
	<div class="flex h-screen text-gray-400 bg-gray-900">


		<MainDrawer :drawerOpen="drawerOpen" :isMobile="isMobile"></MainDrawer>
		<SecondaryDrawer :drawerOpen="drawerOpen"></SecondaryDrawer>
		<Overlay :visible="drawerOpen && isMobile" :onClickFunction="toggleSidebar"></Overlay>
		<div :class="isMobile?'w-full':'w-full ml-72'">
			<MainContent :isMobile="isMobile"></MainContent>
			<ReloadPWA></ReloadPWA>
		</div>
	</div>
</template>

<script>
	import MainDrawer from "Components/navigation/MainDrawer.vue";
	import SecondaryDrawer from "Components/navigation/SecondaryDrawer.vue";
	import MainContent from "Components/contents/MainContent.vue";
	import Overlay from "Components/navigation/Overlay.vue";
	import ReloadPWA from "Components/pwa/ReloadPWA.vue";

	export default {
		components: {
			MainDrawer,
			SecondaryDrawer,
			MainContent,
			Overlay,
			ReloadPWA
		},
		data() {
			return {
				isMobile: true,
			}
		},
		beforeDestroy() {
			if (typeof window === 'undefined') return
			window.removeEventListener('resize', this.onResize, {
				passive: true
			})
		},
		mounted() {
			this.onResize()
			window.addEventListener('resize', this.onResize, {
				passive: true
			})
		},
		methods: {
			onResize() {
				this.isMobile = window.innerWidth < 600
			},
			toggleSidebar() {
				this.$store.commit('toggleSidebar');
			}
		},
		computed: {
			drawerOpen() {
				return this.$store.state.sidebarShowing || !this.isMobile
			}
		},
		watch: {
			drawerOpen: {
				immediate: true,
				handler(drawerOpen) {
					if (drawerOpen && this.isMobile) document.body.style.setProperty("overflow", "hidden");
					else document.body.style.removeProperty("overflow");
				}
			}
		}
	}
</script>
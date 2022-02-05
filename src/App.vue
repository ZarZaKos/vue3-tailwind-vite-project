<template>
	<div class="flex w-screen h-screen text-gray-400 bg-gray-900">

		<ReloadPWA></ReloadPWA>
		<MainDrawer :drawerOpen="drawerOpen"></MainDrawer>
		<SecondaryDrawer :drawerOpen="drawerOpen"></SecondaryDrawer>
		<Overlay :drawerOpen="drawerOpen" :isMobile="isMobile"></Overlay>
		<div :class="isMobile?'w-full':'w-full ml-72'">
			<MainContent :isMobile="isMobile"></MainContent>
		</div>
	</div>
</template>

<script>
import MainDrawer 			from "Components/navigation/MainDrawer.vue";
import SecondaryDrawer 		from "Components/navigation/SecondaryDrawer.vue";
import MainContent 			from "Components/contents/MainContent.vue";
import Overlay 				from "Components/navigation/Overlay.vue";
import ReloadPWA 			from "./components/pwa/ReloadPWA.vue";

export default {
    components: { MainDrawer, SecondaryDrawer, MainContent, Overlay, ReloadPWA },

	data(){
		return {
			isMobile : false,
		}
	},

    beforeDestroy () {
      if (typeof window === 'undefined') return

      window.removeEventListener('resize', this.onResize, { passive: true })
    },

    mounted () {
      this.onResize()

      window.addEventListener('resize', this.onResize, { passive: true })
    },

    methods: {
      onResize () {
        this.isMobile = window.innerWidth < 600
      },
    },

	computed:{
		drawerOpen(){
			return this.$store.state.sidebarShowing || !this.isMobile
    	}
	}
}
</script>